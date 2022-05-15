import React, { useState, useEffect, useRef,KeyboardEvent } from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (str: string) => string[] | Promise<string[]>;
  onSelect?: (item: string) => void;
  renderOption?: (item: DataSourceType) => React.ReactElement
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, renderOption, value, ...restProps } = props;

  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const componentRef = useRef<HTMLDivElement>(null)
  const triggerSearch = useRef(false)
  const debounceValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => {
    setSuggestions([])
  })

  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const results = fetchSuggestions(debounceValue);
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
  }, [debounceValue])

  const highlight = (index: number) => {
    if (index < 0) index =0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    switch(e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break;
      case 38:
        highlight(highlightIndex - 1)
        break;
      case 40: 
        highlight(highlightIndex + 1)
        break;
      case 27:
        setSuggestions([])
        break;
      default:
        break
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true
  };

  const handleSelect = (item:DataSourceObject) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item.value)
    }
    triggerSearch.current = false
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item
  }

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const classes = classNames('suggestion-item', {
            'item-highlighted': index === highlightIndex
          })
          return <li key={index} className={classes} onClick={() => handleSelect(item)}>{ renderTemplate(item) }</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="auto-complete" ref={componentRef}>
      <Input value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} {...restProps} />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

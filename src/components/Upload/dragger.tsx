import React, { useRef, useState } from "react";
import classNames from "classnames";


interface DraggerProps {
    onFile: (files: FileList) => void;
    children?: React.ReactElement
}

export const Dragger: React.FC<DraggerProps> = (props) => {

    const {onFile, children} = props;
    const [dragOver, setDragOver] = useState(false)
    const classes = classNames('uploader-dragger', {
        'is-dragover': dragOver
    })
    const handleDrop = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault()
        setDragOver(false)
        onFile(e.dataTransfer.files)
    }
    const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
        e.preventDefault()
        setDragOver(over)
    }

    return (
        <div
            className={classes}
            onDragOver={e => {handleDrag(e, true)}}
            onDragLeave={e => {handleDrag(e, false)}}
            onDrop={handleDrop}
        >
            {children}
        </div>
    )
}


export default Dragger


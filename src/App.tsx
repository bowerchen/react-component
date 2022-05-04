import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Transition from './components/Transition/transition'


library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button>Hello world</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello world</Button>
        <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello world</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Hello world</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Hello world</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button>
        <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button> */}

        {/* <Icon icon="arrow-down" theme="primary" size="10x" /> */}

        <Menu>
          <MenuItem>hello 1</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>
          </SubMenu>
          <MenuItem>hello 2</MenuItem>
          <MenuItem>hello 3</MenuItem>
        </Menu>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

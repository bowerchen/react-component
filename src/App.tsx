import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello world</Button>
        <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello world</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button>
        <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">baidu</Button>
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

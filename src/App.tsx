import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchAPIData } from "./api/DataProvider";

const App = () => {
  const apiData: any = fetchAPIData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <footer>
            {JSON.stringify(apiData)}
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;

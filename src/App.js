import React from 'react';
import Webviews from './components/Webviews';
import Sites from './config/Sites';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webview Helper</h1>
      </header>
      <Webviews sites={Sites} />
    </div>
  );
}

export default App;

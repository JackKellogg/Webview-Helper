import React from 'react';
import Webview from './components/Webview';
import Sites from './config/Sites';
import './App.css';

function App() {

  const Views = Sites.map(site => {return <Webview key={site} url={site}/>});
  console.log(Sites);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webview Helper</h1>
      </header>
      {Views}
      {/* <Webviews sites={Sites} /> */}
    </div>
  );
}

export default App;

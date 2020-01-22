import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
function App() {
  const [adet, adediAta] = useState(0);
   useEffect(() => {
    document.title = `${adet} kere tıkladınız.`;
  });


  return (
    <div className="App">
      <header className="App-header">
      <p>{adet} kere tıkladınız.</p>
      <button onClick={() => adediAta(adet + 1)}>Tıkla</button>
      </header>
    </div>
  );
}

export default App;

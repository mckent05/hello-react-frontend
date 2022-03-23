import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './component/Greeting';
import Home from './component/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;

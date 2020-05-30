import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Create />
    </div>
  );
}

export default App;

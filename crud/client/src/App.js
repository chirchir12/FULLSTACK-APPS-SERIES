import React from 'react';
import './App.css';
import NavBar from './Navbar/NavBar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;

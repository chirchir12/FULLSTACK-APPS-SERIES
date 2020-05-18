import React from 'react';
import './App.css';
import Register from './components/register/Register';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Update from './components/Dashboard/Update/Update';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Dashboard /> */}
        <Update />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Register from './components/register/Register';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        {/* <Login /> */}
        <Register />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

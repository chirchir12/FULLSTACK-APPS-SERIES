import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/profile/update" component={Update} />
          <Route exact path="/profile/dashboard" component={Dashboard} />
          <Route exact path="/" component={Dashboard} />

          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

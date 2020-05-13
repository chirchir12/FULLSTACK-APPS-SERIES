import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar/NavBar';
import Home from './Home/Home';
import Edit from './Edit/Edit';
import Create from './Create/Create';
import Detail from './Detail/Detail';
import DataContextProvider from './Context/DataContext';

function App() {
  return (
    <DataContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route path="/employee/:id" component={Detail} />
            <Route path="/employee/:id/edit" component={Edit} />
          </div>
        </div>
      </Router>
    </DataContextProvider>
  );
}

export default App;

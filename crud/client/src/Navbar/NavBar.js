import React from 'react';
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-color">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">
          EMPLOYEES HRS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact={true} className="nav-link" activeClassName="active" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact={true} className="nav-link" activeClassName="active" to="/create">
                Create Employee
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

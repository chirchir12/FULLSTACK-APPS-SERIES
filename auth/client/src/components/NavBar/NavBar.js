import React from 'react';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-color  ">
      <div className="container">
        <a className="navbar-brand color-white link" href="#..">
          UserDbR
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link color-white link" href="#..">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link color-white link" href="#..">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link color-white link" href="#..">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link color-white link" href="#..">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

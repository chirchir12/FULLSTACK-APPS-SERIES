import React from 'react';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <span className="navbar-brand text-light">
          Jobs Tracked <sup class="badge badge-light text-danger">4</sup>
        </span>
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
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                All Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light btn btn-danger" href="#">
                Create Entry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

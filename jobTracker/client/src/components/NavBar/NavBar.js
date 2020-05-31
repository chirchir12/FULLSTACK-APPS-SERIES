import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../context/JobContext';

function NavBar(props) {
  const { jobs } = useContext(JobContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <span className="navbar-brand text-light">
          Jobs Tracked{' '}
          <sup className="badge badge-light text-danger">
            {jobs && jobs.length > 0 ? jobs.length : 0}
          </sup>
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
              <Link className="nav-link text-light" to="/">
                All Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light btn btn-danger"
                to="/job/create"
              >
                Create Entry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../../services/userService';
import { useHistory } from 'react-router-dom';

function NavBar(props) {
  console.log(isAuthenticated);

  let history = useHistory();
  const { logout } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-primary-color  ">
      <div className="container">
        <a className="navbar-brand color-white link" href="/">
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
              <NavLink exact className="nav-link color-white link" to="/">
                Home
              </NavLink>
            </li>
            {!isAuthenticated() ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link color-white link"
                    to="/user/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link color-white link"
                    to="/user/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link color-white link"
                    to="/profile/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      logout();
                      history.push('/user/login');
                    }}
                    exact
                    className="nav-link btn btn-danger color-white link"
                    to="/profile/dashboard"
                  >
                    logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

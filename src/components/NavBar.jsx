import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/vidly/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/vidly/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/vidly/rentals">
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/vidly/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/vidly/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/vidly/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/vidly/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

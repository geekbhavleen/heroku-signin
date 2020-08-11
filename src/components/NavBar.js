import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const currentTab = (history, path) => {
  if (history.location.pathname === path)
    return { color: '#f9f9f9', fontSize: 'bold' };
  else
    return { color: '#c7c7c7' };
};

const NavBar = (history) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <Link className="navbar-brand cursive" to="/">My WebSite</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <ul className="navbar-nav text-uppercase m-auto">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <li className="nav-item font-weight-bold">
            <Link
              className="nav-link ml-5"
              style={currentTab(history, '/')}
              to="/"
            >
              Home
               <span
                className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item font-weight-bold">
            <Link
              className="nav-link ml-5"
              style={currentTab(history, '/signin')}
              to="/signin">Sign In</Link>
          </li>
          <li className="nav-item font-weight-bold">
            <Link
              className="nav-link ml-5"
              style={currentTab(history, '/signup')}
              to="/signup">Sign Up</Link>
          </li>
        </div>
      </ul>

    </nav >
  );
};

export default withRouter(NavBar);
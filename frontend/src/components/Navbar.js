import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Food Ordering</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-primary mx-1" to="/login" role="submit">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="submit">Signup</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

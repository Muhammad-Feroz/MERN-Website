import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">FINE ART</NavLink>

      {props.auth ?
      <>
      <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
         <i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
      <i className="fa fa-user-plus me-2"></i>Register</NavLink>
        </>
        :
        <>
      <NavLink to="/dashboard" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        
      <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
      <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
      <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
      </>
}
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;

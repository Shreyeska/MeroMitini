import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" exact activeClassName="active">
          <img src="logo.png" alt="Logo" />
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/home" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/events" activeClassName="active">
          Events
        </NavLink>
        <NavLink to="/notice" activeClassName="active">
          Notice
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/sign-up" activeClassName="active">
          Signup
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

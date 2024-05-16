import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" exact activeClassName="active">
          <img src="" alt="Logo" />
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/home" exact activeClassName="active">
          Home
        </NavLink>

        <div className="dropdown">
          <button className="dropbtn">
            Events <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div className="dropdown-content">
            <NavLink to="/upcoming-events" activeClassName="active">
              Upcoming Events
            </NavLink>
            <NavLink to="/events" activeClassName="active">
              Past Events
            </NavLink>
          </div>
        </div>

        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/sign-up" activeClassName="active">
          Signup
        </NavLink>
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

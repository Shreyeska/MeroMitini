import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7000/UserProfilePage', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:7000/logout', {
      credentials: 'include',
      method: 'POST',
    }).then(() => {
      setUsername(null);
    });
  }

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
        
        {username ? (
          <>
            <NavLink to="/user" exact activeClassName="active">
          User
        </NavLink>
            <a onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
            <NavLink to="/sign-up" activeClassName="active">
              Signup
            </NavLink>
          </>
        )}

        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </nav>
  );
}

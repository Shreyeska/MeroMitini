import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../UserContext";

import logo from "../asset/infologo.png"; // Adjust the path if needed

export default function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:7000/UserProfilePage", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout(event) {
    event.preventDefault();
    fetch("http://localhost:7000/logout", {
      credentials: "include",
      method: "POST",
    }).then(() => {
      setUserInfo(null);
    });
  }

  const username = userInfo?.username;

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" activeClassName="active">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/home" activeClassName="active">
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
            <NavLink to="/user" activeClassName="active">
              {username}
            </NavLink>
            <a href="#logout" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
            <NavLink to="/sign-up" activeClassName="active">
              Sign-up
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

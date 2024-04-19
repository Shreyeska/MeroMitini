import React from "react";
import Events from "../../components/Home/Events";
import Notice from "../../components/Home/Notice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./../../css/home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="main-outlet">
        <div className="about">
          <div className="col">
            <h1>Women Empowerment</h1>
            <h2>For the women By the women</h2>
            <div className="search-section">
              <textarea
                placeholder="Search for your event"
                className="search-input"
              ></textarea>
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <Events />

        <Notice />
        <Footer />
      </div>
    </>
  );
};

export default Home;

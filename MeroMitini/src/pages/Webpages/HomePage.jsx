import React from "react";
import HomeEvents from "../../components/Home/HomeEvents";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HostEventBanner from "../../components/Home/HostEventBanner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./../../css/home.css";
import HomeUpcomingEvents from "../../components/Home/HomeUpcomingEvents";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="main-outlet">
        <div className="about">
          <div className="col">
            <h1>Women Empowerment</h1>
            <h2>For the women x By the women</h2>
            <div className="search-section">
              <input
                type="text"
                placeholder="Search for your event"
                className="search-input"
              ></input>
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>

        <h1>Past Events</h1>
        <HomeEvents />
        <Link to="/events" className="read-more-button">
          Read More
        </Link>
        <h1>New Upcoming Events</h1>
        <HomeUpcomingEvents />
        <Link to="/upcoming-events" className="read-more-button">
          Read More
        </Link>

        <HostEventBanner />

        <Footer />
      </div>
    </>
  );
};

export default Home;

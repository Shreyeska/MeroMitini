import React from "react";
import "../../css/hostevents.css";
import { Link } from "react-router-dom";
const HostEventBanner = () => {
  return (
    <>
      <div className="host-event">
        <h1>Want to host an Event??</h1>
        <button className="host-button">
          <Link to="/sign-up" className="host-link">
            Host Event
          </Link>
        </button>
      </div>
    </>
  );
};

export default HostEventBanner;

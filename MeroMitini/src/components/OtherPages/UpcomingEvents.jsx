import React from "react";
import "./../../css/events.css";
import newEventsData from "../../data/newEventsData.json";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <>
      <div className="event-page">
        <div className="event-container">
          {newEventsData.map((event) => (
            <div className="event-card" key={event.id}>
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
              <div className="event-details">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-category">{event.category}</p>
                <button className="read-more-btn">
                  <Link to="/event-details" className="event-detail-link">
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;

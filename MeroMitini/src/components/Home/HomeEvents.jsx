import React from "react";
import "./../../css/events.css";
import eventsData from "../../data/eventsData.json";
import { Link } from "react-router-dom";

const HomeEvents = () => {
  const featuredEvents = eventsData.slice(0, 4);

  return (
    <>
      <div className="event-container">
        {featuredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-category">{event.category}</p>
              <button className="read-more-btn">
                <Link to="/event-details" className="event-detail-link">
                  Read More
                </Link>
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeEvents;

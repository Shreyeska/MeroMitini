import React from "react";
import "./../../css/events.css";
import eventsData from "../../data/eventsData.json";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <div className="event-page">
        <div className="event-container">
          {eventsData.map((event) => (
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

                <Link to="/past-event-details" className="event-detail-link">
                  <button className="read-more-btn"> Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;

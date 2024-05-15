import React from "react";
import "../../css/eventDetails.css";

const EventDetails = ({ event }) => {
  return (
    <div className="event-details-container">
      <img
        src={event.image}
        alt={event.eventName}
        className="event-details-image"
      />
      <div className="event-details-content">
        <h2 className="event-title">{event.eventName}</h2>
        <div className="event-meta">
          <span className="event-meta-item">
            <strong>Date:</strong> {event.date}
          </span>
          <span className="event-meta-item">
            <strong>Duration:</strong> {event.duration}
          </span>
          <span className="event-meta-item">
            <strong>Location:</strong> {event.location}
          </span>
          <button className="register-button">Register</button>
        </div>
        <div className="event-summary">
          <h3>About the event:</h3>
          {event.summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

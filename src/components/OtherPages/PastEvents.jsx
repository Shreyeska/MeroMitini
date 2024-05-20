import React from "react";
import "../../css/eventDetails.css";

const PastEvents = ({ event }) => {
  return (
    <div className="event-details-full">
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
            <span className="event-meta-item">
              <strong>Particpants:</strong> {event.participants}
            </span>
            <span className="event-meta-item">
              <strong>Objectives:</strong> {event.objective}
            </span>
          </div>
        </div>
      </div>
      <div className="event-summary">
        <h3>About the event:</h3>
        {event.summary.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="event-gallery">
        <h3>Event Gallery:</h3>
        <div className="gallery-images">
          {event.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;

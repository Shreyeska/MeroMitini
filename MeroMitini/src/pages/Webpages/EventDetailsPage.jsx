import React, { useState, useEffect } from "react";
import EventDetails from "../../components/OtherPages/EventDetails";
import eventDetailsData from "../../data/eventDetailsData.json";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/eventDetails.css";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulating fetching events data from JSON file
    setEvents(eventDetailsData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="events-page">
        <div className="events-container">
          {events.map((event) => (
            <EventDetails key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;

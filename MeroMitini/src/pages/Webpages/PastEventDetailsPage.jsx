import React, { useState, useEffect } from "react";
import PastEvents from "../../components/OtherPages/PastEvents.jsx";
import eventDetailsData from "../../data/eventDetailsData.json";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/eventDetails.css";

const PastEventDetailsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventDetailsData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="events-page">
        <div className="events-container">
          {events.map((event) => (
            <PastEvents key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PastEventDetailsPage;

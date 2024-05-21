import React from "react";
import Events from "../../components/OtherPages/Events";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <h1> Past events</h1>
      <p className="desc">
        Reflect on past events, cherishing memories and lessons learned. Dive
        into nostalgia and celebrate milestones with fond recollections.
      </p>
      <Events />
      <Footer />
    </>
  );
};

export default EventsPage;

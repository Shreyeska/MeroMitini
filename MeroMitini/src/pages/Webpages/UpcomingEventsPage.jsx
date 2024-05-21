import React from "react";
import UpcomingEvents from "../../components/OtherPages/UpcomingEvents";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UpcomingEventsPage = () => {
  return (
    <>
      <Navbar />
      <h1> Upcoming New Events</h1>
      <p className="desc">
        Upcoming events offer a glimpse into the future, showcasing what's on
        the horizon. New events introduce fresh experiences, bringing innovation
        and excitement to your calendar.
      </p>
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default UpcomingEventsPage;

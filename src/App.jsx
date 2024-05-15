import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import NotFound from "./pages/NotfoundPage";
import SignUp from "./pages/Auth/SignupPage";
import Login from "./pages/Auth/LoginPage";
import Home from "./pages/Webpages/HomePage";
import ContactPage from "./pages/Webpages/ContactPage";
import AboutPage from "./pages/Webpages/AboutPage";
import EventsPage from "./pages/Webpages/EventsPage";
import UpcomingEventsPage from "./pages/Webpages/UpcomingEventsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

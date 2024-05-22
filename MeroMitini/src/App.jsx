import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NotFound from "./pages/NotfoundPage";
import SignUp from "./pages/Auth/SignupPage";
import Login from "./pages/Auth/LoginPage";
import Home from "./pages/Webpages/HomePage";
import ContactPage from "./pages/Webpages/ContactPage";
import AboutPage from "./pages/Webpages/AboutPage";
import EventsPage from "./pages/Webpages/EventsPage";
import UpcomingEventsPage from "./pages/Webpages/UpcomingEventsPage";
import EventDetailsPage from "./pages/Webpages/EventDetailsPage";
import PastEventDetailsPage from "./pages/Webpages/PastEventDetailsPage";
import HostEventForm from "./pages/Webpages/HostEventPage";
import UserProfile from "./pages/Webpages/UserProfile";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <>
    <UserContextProvider>
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
          <Route path="/event-details" element={<EventDetailsPage />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/past-event-details"element={<PastEventDetailsPage />}
          />
          <Route path="/host-an-event-form" element={<HostEventForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </UserContextProvider>
    </>
  );
}

export default App;

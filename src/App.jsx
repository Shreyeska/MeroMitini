import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import NotFound from "./pages/NotfoundPage";
import SignUp from "./pages/Auth/SignupPage";
import Home from "./pages/Webpages/HomePage";
import AboutPage from "./pages/Webpages/AboutPage";
import EventsPage from "./pages/Webpages/EventsPage";
import NoticePage from "./pages/Webpages/NoticePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import signUp from "./pages/SignupPage.jsx";
import "./App.css";
import NotFound from "./pages/NotfoundPage.jsx";

function App() {
  return (
    <BrowserRouter basename="/app">
      <h1>hello</h1>
      <Routes>
        <Route path="/sign-up" element={<signUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

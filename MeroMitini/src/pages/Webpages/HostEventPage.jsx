import React, { useState } from "react";
import "../../css/HostEventForm.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image from "../../asset/about.png";

const HostEventForm = () => {
  const [formData, setFormData] = useState({
    hostEventName: "",
    hostEventDuration: "",
    hostEventDate: "",
    hostEventTime: "",
    hostEventLocation: "",
    hostObjective: "",
    hostTargetAudience: "",
    hostContactPersonName: "",
    hostContactNumber: "",
    hostEmail: "",
    hostOrganizersName: "",
    hostSummary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="host-event">
        <h1>Want to host an Event??</h1>
      </div>

      <div className="event-registration-form">
        <h1>Register Event</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="hostEventName">Event Name:</label>
          <input
            type="text"
            id="hostEventName"
            name="hostEventName"
            value={formData.hostEventName}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEventDuration">Event Duration:</label>
          <input
            type="text"
            id="hostEventDuration"
            name="hostEventDuration"
            value={formData.hostEventDuration}
            onChange={handleChange}
          />

          <label htmlFor="hostEventDate">Event Date:</label>
          <input
            type="date"
            id="hostEventDate"
            name="hostEventDate"
            value={formData.hostEventDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEventTime">Event Time:</label>
          <input
            type="time"
            id="hostEventTime"
            name="hostEventTime"
            value={formData.hostEventTime}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEventLocation">Event Location:</label>
          <input
            type="text"
            id="hostEventLocation"
            name="hostEventLocation"
            value={formData.hostEventLocation}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostObjective">Objective:</label>
          <textarea
            id="hostObjective"
            name="hostObjective"
            value={formData.hostObjective}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostTargetAudience">Target Audience:</label>
          <input
            type="text"
            id="hostTargetAudience"
            name="hostTargetAudience"
            value={formData.hostTargetAudience}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostContactPersonName">Contact Person Name:</label>
          <input
            type="text"
            id="hostContactPersonName"
            name="hostContactPersonName"
            value={formData.hostContactPersonName}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostContactNumber">Contact Number:</label>
          <input
            type="tel"
            id="hostContactNumber"
            name="hostContactNumber"
            value={formData.hostContactNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEmail">Email:</label>
          <input
            type="email"
            id="hostEmail"
            name="hostEmail"
            value={formData.hostEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostOrganizersName">Organizers Name:</label>
          <input
            type="text"
            id="hostOrganizersName"
            name="hostOrganizersName"
            value={formData.hostOrganizersName}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostSummary">Summary:</label>
          <textarea
            id="hostSummary"
            name="hostSummary"
            value={formData.hostSummary}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default HostEventForm;

import React, { useState } from "react";
import "../../css/HostEventForm.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function HostEventForm() {
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

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFile(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (file) {
      data.append("file", file);
    }

    try {
      const response = await fetch("http://localhost:7000/upcoming-events", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Event created successfully");
      } else {
        const errorText = await response.text();
        console.error("Failed to create event:", errorText);
      }
    } catch (error) {
      console.error("Failed to create event:", error);
    }
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
            placeholder="Event Name"
            id="hostEventName"
            name="hostEventName"
            value={formData.hostEventName}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEventDuration">Event Duration:</label>
          <input
            type="text"
            placeholder="Event Duration"
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

          <label htmlFor="hostEventTime">Image:</label>
          <input
            type="file"
            id="hostEventTime"
            name="hostEventTime"
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEventLocation">Event Location:</label>
          <input
            type="text"
            id="hostEventLocation"
            placeholder="Event Location"
            name="hostEventLocation"
            value={formData.hostEventLocation}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostObjective">Objective:</label>
          <textarea
            id="hostObjective"
            name="hostObjective"
            placeholder="Objective"
            value={formData.hostObjective}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostTargetAudience">Target Audience:</label>
          <input
            type="text"
            id="hostTargetAudience"
            placeholder="Target Audience"
            name="hostTargetAudience"
            value={formData.hostTargetAudience}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostContactPersonName">Contact Person Name:</label>
          <input
            type="text"
            id="hostContactPersonName"
            placeholder="Contact Person Name"
            name="hostContactPersonName"
            value={formData.hostContactPersonName}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostContactNumber">Contact Number:</label>
          <input
            type="tel"
            id="hostContactNumber"
            placeholder="Contact Number"
            name="hostContactNumber"
            value={formData.hostContactNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostEmail">Email:</label>
          <input
            type="email"
            id="hostEmail"
            placeholder="Email"
            name="hostEmail"
            value={formData.hostEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostOrganizersName">Organizers Name:</label>
          <input
            type="text"
            id="hostOrganizersName"
            placeholder="Organizers Name"
            name="hostOrganizersName"
            value={formData.hostOrganizersName}
            onChange={handleChange}
            required
          />

          <label htmlFor="hostSummary">Summary:</label>
          <textarea
            id="hostSummary"
            placeholder="Summary"
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
}

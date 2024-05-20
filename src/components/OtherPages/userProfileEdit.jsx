import React, { useState, useEffect } from "react";
import userProfileData from "../../data/userProfile.json";
import "../../css/userProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState(userProfileData.user);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with user data, such as submitting to backend
    console.log("User profile submitted:", user);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="wardNo">Ward No:</label>
        <input
          type="text"
          id="wardNo"
          name="wardNo"
          value={user.wardNo}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={user.dateOfBirth}
          onChange={handleChange}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;

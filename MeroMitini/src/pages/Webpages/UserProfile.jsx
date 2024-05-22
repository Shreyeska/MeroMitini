import React from "react";
import userProfileData from "../../data/userProfile.json";
import profileImage from "../../asset/usericon.png";
import "../../css/userProfile.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../css/hostevents.css";

const UserProfilePage = () => {
  const user = userProfileData.user;

  return (
    <>
      <Navbar />
      <div className="user-profile-page">
        <div className="user-info-container">
          <h2>User Profile</h2>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="user-info">
            <p>
              <strong>Name:</strong> {user.fullName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phoneNumber}
            </p>
            <p>
              <strong>Ward No:</strong> {user.wardNo}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {user.dateOfBirth}
            </p>
            <button className="host-button">
              <Link to="/host-an-event-form" className="host-link">
                Host Event
              </Link>
            </button>
          </div>
        </div>
        <div className="user-actions">
          <h2>{user.fullName}</h2>
          <div className="divider"></div>
          <p>No events yet</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfilePage;

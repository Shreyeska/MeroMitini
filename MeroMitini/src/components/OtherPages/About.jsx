import React from "react";
import "./../../css/about.css";
import image1 from "../../asset/image1.jpg";
import image2 from "../../asset/image2.jpg";
import image3 from "../../asset/image3.jpg";
import niva from "../../asset/niva.png";
import shre from "../../asset/shreyeska.jpg";
import dristi from "../../asset/dristi.jpg";
import mentorImage from "../../asset/sagun.jpg";
import linkedin from "../../asset/linkedin.png";
import image from "../../asset/IHlogo.png";

const About = () => {
  const teamMembers = [
    {
      name: "Niva Maharjan",
      image: niva,
      linkedin: "https://www.linkedin.com/in/niva-maharjan/",
    },
    {
      name: "Shreyeska Silwal",
      image: shre,
      linkedin: "https://www.linkedin.com/in/shreyeska/",
    },
    {
      name: "Dirsti Maharjan",
      image: dristi,
      linkedin: "https://www.linkedin.com/in/dristi-maharjan-a50020252/",
    },
  ];

  const mentor = {
    name: "Mr. Sagun Dhungana",
    image: mentorImage,
    linkedin: "https://www.linkedin.com/in/sagundhungana/",
  };
  return (
    <>
      <div className="about-page">
        <div className="col1">
          <h1>About Us</h1>
          <span>
            <strong>Problem Statement:</strong>
            <p>
              The problem we address is the lack of centralized information on
              women-centric events in Ward 17, Kathmandu.
            </p>
          </span>
          <span>
            <strong>Our Solution:</strong>
            <p>
              "INFO HER" is a digital platform providing easy access to
              information on activities fostering women's empowerment and
              participation.
            </p>
          </span>
          <div className="features">
            <strong>Features of INFO HER:</strong>
            <ul>
              <li>Register for events in Ward 17</li>
              <li>Request to host an event in Ward 17</li>
            </ul>
          </div>

          <p>
            <strong>Thank you to Tech LeadHers for their support.</strong>
          </p>
        </div>
        <div className="col2">
          <img src={image} alt="About" />
        </div>
      </div>

      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
              </a>{" "}
              <strong>{member.name}</strong>
            </p>
          </div>
        ))}
      </div>

      <h2>Thank You to our mentor</h2>
      <div className="mentor-container">
        <img src={mentor.image} alt={mentor.name} className="mentor-image" />
        <p>
          <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
          </a>{" "}
          <strong>{mentor.name}</strong>
        </p>

        <p>
          <strong> for his invaluable guidance and support</strong>
        </p>
      </div>

      <h2>Gallery</h2>

      <div className="gallery">
        <img src={image1} alt="About" />
        <img src={image2} alt="About" />
        <img src={image3} alt="About" />
      </div>
    </>
  );
};

export default About;

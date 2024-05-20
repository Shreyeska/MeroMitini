import React from "react";
import "./../../css/about.css";
import image1 from "../../asset/image1.jpg";
import image2 from "../../asset/image2.jpg";
import image3 from "../../asset/image3.jpg";
import mentorImage from "../../asset/image3.jpg";

import image from "../../asset/techLeadHers.jpg";

const About = () => {
  const teamMembers = [
    { name: "Niva Maharjan", image: image1 },
    { name: "Shreyeska Silwal", image: image1 },
    { name: "Dirsti Maharjan", image: image1 },
  ];

  const mentor = {
    name: "Mr. Sagun Dhungana",
    image: mentorImage,
  };
  return <>About Page</>;
};

export default About;

import React from "react";
import "./../../css/about.css";
import image from "/assets/about.png";
const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="col1">
          <h1>About Us</h1>
          <p>
            Welcome to the innovative "Digitizing Women-Centric Events in Ward
            17" project! Our mission is to leverage digital technology to
            document and promote activities and events organized by and for
            women in Kathmandu Ward 17.
          </p>
          <p>
            At the core of our initiative is the goal to develop a central,
            user-friendly web portal, providing accessible details about
            activities fostering women empowerment and participation. By
            creating this digital platform, we aim to bridge the gap in easily
            available and consistent data regarding events that primarily focus
            on women in our community.
          </p>
          <p>
            Our team is comprised of passionate individuals dedicated to the
            theme of women empowerment. As fellows of the esteemed Tech LeadHers
            cohort 2023, we are committed to driving positive change and
            fostering inclusivity. With a collective vision, we have embarked on
            the journey to digitize events within Ward 17, with a special focus
            on those initiated or targeted towards women.
          </p>
          <p>
            One of our primary initiatives is the digitization of the Hour of
            Community Work (HOC) and project, led by Tech LeadHers fellows. By
            capturing and showcasing the impactful efforts of women within our
            community, we aspire to create a comprehensive digital archive that
            not only celebrates their achievements but also inspires ongoing
            initiatives in women's empowerment. Through our dedication and
            collaboration, we strive to promote inclusivity, empowerment, and
            community support.
          </p>
          <p>
            Join us on this journey as we work towards creating a more equitable
            and empowered society for all.
          </p>
        </div>
        <div className="col2">
          <img src={image} alt="About" />
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import "./../../css/about.css";
import image1 from "../../asset/image1.jpg";
import image2 from "../../asset/image2.jpg";
import image3 from "../../asset/image3.jpg";
import image from "../../asset/techLeadHers.jpg";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="col1">
          <h1>About Us</h1>
          <p>
            Welcome to "INFO HER," an innovative project aimed at digitizing
            women-centric events in Ward 17 of Kathmandu. As fellows of the
            esteemed Tech LeadHers cohort 2024, we, the "Mero Mitini" team, are
            passionate about leveraging digital technology to empower women in
            the IT field and beyond.
          </p>

          <p>
            Originally conceived as a "Best Friend" app for women to access all
            relevant information in one place, our journey took a turn when we
            encountered challenges in sourcing data. Determined to address this
            issue, we pivoted our focus towards creating a centralized digital
            platform – "INFO HER."
          </p>

          <p>
            Our mission is clear: to document and promote activities and events
            organized by and for women in Ward 17. At the heart of our
            initiative lies the commitment to develop a user-friendly web portal
            that provides easy access to information on activities fostering
            women's empowerment and participation.
          </p>

          <p>
            As advocates for women's empowerment, we understand the importance
            of bridging the gap in accessible and consistent data regarding
            events that cater to women in our community. Through "INFO HER," we
            aim to create a comprehensive digital archive that celebrates
            women's achievements and inspires ongoing initiatives in women's
            empowerment.
          </p>

          <p>
            Our primary initiative involves the digitization of the Hour of
            Community Work (HOC) project, led by Tech LeadHers fellows. By
            capturing and showcasing the impactful efforts of women within our
            community, we strive to promote inclusivity, empowerment, and
            community support.
          </p>
          <h3>Team Members:</h3>
          <p>Niva Maharjan</p>
          <p>Dristi Maharjan</p>
          <p> Shreyeska Silwal</p>

          <p>
            Join us on our journey as we work towards creating a more equitable
            and empowered society for all women in Ward 17 and beyond. Together,
            let's pave the way for a brighter future where women's voices are
            heard and celebrated.
          </p>
        </div>
        <div className="col2">
          <img src={image} alt="About" />
        </div>
      </div>
      <div className="gallery">
        <img src={image1} alt="About" />
        <img src={image2} alt="About" />
        <img src={image3} alt="About" />
      </div>
    </>
  );
};

export default About;

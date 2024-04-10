import React from "react";
import Events from "../../components/Home/Events";
import Notice from "../../components/Home/Notice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import cat from "./../../assets/cat.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="main-outlet">
        <div className="about">
          <div className="col">
            <p>
              The innovative "Digitizing Women-Centric Events in Ward 17"
              project aims to use digital technology to document and promote
              activities and events organized by and for women in Kathmandu Ward
              17. By developing a central, user-friendly web portal, this
              project will make sure that more people can access details about
              activities that encourage women empowerment and participation,
              which will improve community support and involvement.
            </p>
            <Link to="/About">
              <button>Read more</button>
            </Link>
          </div>
          <div className="col">
            <img src={cat} alt="cat" className="about-image" />
          </div>
        </div>
        <Events />

        <Notice />
        <Footer />
      </div>
    </>
  );
};

export default Home;

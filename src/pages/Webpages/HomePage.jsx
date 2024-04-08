import React from "react";

import About from "../../components/Home/About";
import Events from "../../components/Home/Events";
import Notice from "../../components/Home/Notice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Events />
      <Notice />
      <Footer />
    </>
  );
};

export default Home;

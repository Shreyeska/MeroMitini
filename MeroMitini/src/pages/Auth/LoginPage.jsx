import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Login from "../../components/Auth/Login";

const LoginPage = () => {
  return (
    <>
      <div id="root" className="auth-page">
        <Navbar />
        <Login />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LoginPage;

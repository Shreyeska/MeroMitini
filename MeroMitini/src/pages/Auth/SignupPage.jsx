import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignUp from "../../components/Auth/Signup";

const SignUpPage = () => {
  return (
    <>
      <div id="root" className="auth-page">
        <Navbar />
        <SignUp />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default SignUpPage;

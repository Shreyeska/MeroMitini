import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <h1>This is the Sign up Page</h1>
      <Footer />
      {/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
    <form id="signupForm" action="/register" method="POST">
        <h2>Sign Up</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="username" required>
        <label for="number">Number:</label>
        <input type="text" id="number" name="number" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="Ward no">Ward no:</label>
        <input type="text" id="wardNumber" name="wardNumber" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="login.html">Login here</a></p>
    </body>

</html>
 */}
    </>
  );
};

export default SignUp;

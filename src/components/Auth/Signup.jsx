import React, { useState } from "react";
import "../../css/auth.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    number: "",
    email: "",
    wardNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={state.username}
        onChange={handleChange}
        required
      />
      <label htmlFor="number">Number:</label>
      <input
        type="text"
        id="number"
        name="number"
        value={state.number}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="wardNumber">Ward no:</label>
      <input
        type="text"
        id="wardNumber"
        name="wardNumber"
        value={state.wardNumber}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={state.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={state.confirmPassword}
        onChange={handleChange}
        required
      />
      {state.passwordError && (
        <span style={{ color: "red" }}>{state.passwordError}</span>
      )}
      <button type="submit">Sign Up</button>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignUp;

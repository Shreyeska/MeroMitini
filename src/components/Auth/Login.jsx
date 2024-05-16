import React, { useState } from "react";
import "../../css/auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    username: "",
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
      <h2>Login</h2>
      <label htmlFor="username">Userame:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={state.username}
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
      <button type="submit">Login</button>
      <p>
        Dont have an account? {""}
        <Link to="/sign-up" className="sign-up">
          Sign-up
        </Link>
      </p>
    </form>
  );
};

export default Login;

import React, { useState } from "react";
import "../../css/auth.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ward, setWard] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(ev) {
    try {
      ev.preventDefault();
      const response = await fetch("http://localhost:7000/SignUp", {
        method: "POST",
        body: JSON.stringify({ username, number, email, ward, password }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="SignUp" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="Username"
        id="username"
        name="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />
      <label htmlFor="number">Mobile Number:</label>
      <input
        type="text"
        id="number"
        placeholder="Mobile number"
        name="number"
        value={number}
        onChange={(ev) => setNumber(ev.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        required
      />
      <label htmlFor="wardNumber">Ward no:</label>
      <input
        type="text"
        id="wardNumber"
        placeholder="Ward number"
        name="wardNumber"
        value={ward}
        onChange={(ev) => setWard(ev.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="login">
          Login
        </Link>
      </p>
    </form>
  );
}

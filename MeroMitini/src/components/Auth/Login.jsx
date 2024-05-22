import React, { useContext, useState } from "react";
import "../../css/auth.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:7000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setRedirect(true);
      } else {
        alert('Wrong Credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form className="login" onSubmit={login}>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        name="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>
        Don't have an account?{" "}
        <Link to="/sign-up" className="sign-up">
          Sign-up
        </Link>
      </p>
    </form>
  );
}

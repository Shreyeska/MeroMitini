import React, { useState } from "react";
import "../../css/auth.css";
import { Link, Navigate } from "react-router-dom";



export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [redirect, setRedirect] = useState(false);


async function login (ev){
  ev.preventDefault();
  const response = await fetch ('http://localhost:7000/login', {
    method:'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type' :'application/json'},
    credentials: 'include',
  })
  if (response.ok){
  setRedirect(true);
  } else {
    alert ('Wrong Credentials');
  }
}

if(redirect){
  return <Navigate to= {'/'} />
}
  return (
    <form className="login" onSubmit={login}>
      <h2>Login</h2>
      <label htmlFor="username">Userame:</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        name="username"
        value={username}
        onChange={ev => setUsername (ev.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={ev => setPassword (ev.target.value)}
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



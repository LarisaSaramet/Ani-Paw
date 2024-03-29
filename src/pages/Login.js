import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase/firebase'; 
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    
    <div className="form-container">
      <div className="form-group">
        <label className="label">Email:</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" onClick={handleLogin}>Login</button>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  
  );
};

export default Login;

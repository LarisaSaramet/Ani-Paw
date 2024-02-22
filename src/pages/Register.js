import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase/firebase';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert('Registration successful! You can now login.');
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

    return (
      <div className="form-container">
        <h2>Register</h2>
        <div className="form-group">
          <label className="label">Email:</label>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div><br/>
        
        <button className="btn" onClick={handleRegister}>Register</button>
      </div>
    );
  };

export default Register;
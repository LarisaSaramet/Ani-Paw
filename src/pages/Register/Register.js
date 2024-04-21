import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase/firebase";
import styles from "./Register.module.css";
import Swal from "sweetalert2";

import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB as db } from "../../firebase/firebase";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleRegister = async () => {
    // Reset the error messages at the beginning of the function
    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setPhoneError("");
    setAddressError("");

    // Check if all fields are filled
    if (!fullName) {
      setFullNameError("Full name is mandatory");
    }
    if (!email) {
      setEmailError("Email is mandatory");
    }
    if (!password) {
      setPasswordError("Password is mandatory");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is mandatory");
    }
    if (!phone) {
      setPhoneError("Phone is mandatory");
    }
    if (!address) {
      setAddressError("Address is mandatory");
    }

    // If any field is empty, stop the function
    if (
      fullNameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      phoneError ||
      addressError
    ) {
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;

      // Add a new document to the "user" collection
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        isDoctor: false,
      });
      alert("User added successfully!");
    } catch (error) {
      // Handle any errors here
      if (error.code === "auth/email-already-in-use") {
        setEmailError("There already exists an account with this email");
      } else {
        console.error("Error creating user: ", error);
      }
    }
  };

  return (
    <div className={styles.form_container}>
      <h2>Register</h2>

      <div className={styles.input_field}>
        <label htmlFor="fullname">Full Name</label>
        <input
          className={styles.input}
          type="text"
          id="fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {fullNameError && <p>{fullNameError}</p>}
      </div>
      {errorMessage && <p>{errorMessage}</p>}

      <div className={styles.input_field}>
        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone">Phone</label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phoneError && <p>{phoneError}</p>}
      </div>

      <div className={styles.input_field}>
        <label htmlFor="address">Address</label>
        <input
          className={styles.input}
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {addressError && <p>{addressError}</p>}
      </div>

      <div className={styles.input_field}>
        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <p>{passwordError}</p>}
      </div>

      <div className={styles.input_field}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {confirmPasswordError && <p>{confirmPasswordError}</p>}
      </div>

      <br />

      <button className={styles.btn} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase/firebase";
import styles from "./Register.module.css";

import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB as db } from "../../firebase/firebase";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("pacient");

  const handleRegister = async () => {
    // Reset the error message at the beginning of the function
    setErrorMessage("");

    // Check if all fields are filled
    const handleRegister = async () => {
      // Reset the error message at the beginning of the function
      setErrorMessage("");

      // Check if all fields are filled
      if (
        !fullName ||
        !email ||
        !password ||
        !confirmPassword ||
        !phone ||
        !address
      ) {
        setErrorMessage("All fields are mandatory");
        {
          errorMessage && <p>{errorMessage}</p>;
        }
        return;
      }

      // Check if passwords match
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      // Check if password is at least 8 characters long
      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters long");
        return;
      }

      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMessage("Please enter a valid email");
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
          isDoctor: selectedValue === "doctor",
        });
      } catch (error) {
        // Handle any errors here
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("There already exists an account with this email");
        } else {
          console.error("Error creating user: ", error);
        }
      }
    };
  };
  const handleRadioChange = (value) => {
    setSelectedValue(value);
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
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
      </div>
      <div className={styles.input_field}>
        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <br />

      <div className={styles.container}>
        <div className={styles.radio_button}>
          <input
            type="radio"
            id="pacient"
            value="pacient"
            checked={selectedValue === "pacient"}
            onChange={() => handleRadioChange("pacient")}
          />
          <label htmlFor="pacient" className={styles.radio_label}>
            Pacient
          </label>
        </div>

        <div className={styles.radio_button}>
          <input
            type="radio"
            id="doctor"
            value="doctor"
            checked={selectedValue === "doctor"}
            onChange={() => handleRadioChange("doctor")}
          />
          <label htmlFor="doctor" className={styles.radio_label}>
            Doctor
          </label>
        </div>
      </div>
      <button className={styles.btn} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;

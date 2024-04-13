import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase/firebase";
import styles from "./Register.module.css";

import { collection, addDoc } from "firebase/firestore";
import {FIREBASE_DB as db} from "../../firebase/firebase"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [selectedValue, setSelectedValue] = useState("pacient");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      {if(selectedValue === "doctor")
      {
         await addDoc(collection(db, "doctor"), {
        email:email
      });
      }
      else {
        await addDoc(collection(db, "pacient"), {
            email:email
          });
      }}
    alert("Registration successful! You can now login.");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className={styles.form_container}>
      <h2>Register</h2>
      <div className={styles.form_group}>
        <label className={styles.label}>Email:</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.form_group}>
        <label className={styles.label}>Password:</label>
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

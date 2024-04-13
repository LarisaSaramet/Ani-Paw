 
// pages/about.js
import React from 'react';
import styles from './About.module.css'; 

const About = () => {
  return (
    <div className={styles.about_us_background}>
    <div className={styles.about_us_container}>
      <div className={styles.about_us_header}>
        <h1>About us</h1>
      </div>
      <div className={styles.about_us_content}>
        <div className={styles.about_us_image_container}>
          <img src="hospital-image.jpg" alt="Veterinary Hospital" />
          <button>Show on map</button>
          <p>We are a modern multidisciplinary veterinary hospital with a full range of services: from diagnosis and treatment to medical support of pets of different types, weight and age.</p>
        </div>
        <div className={styles.about_us_values}>
          <div className={styles.value}>
            <div className={styles.value_icon}>🤲</div>
            <div className={styles.value_title}>Care</div>
            <div className={styles.value_text}>Provide the necessary treatment and care to help your pet recover.</div>
          </div>
          <div className={styles.value}>
            <div className={styles.value_icon}>💼</div>
            <div className={styles.value_title}>Professionalism</div>
            <div className={styles.value_text}>Provide the necessary treatment and care to help your pet recover.</div>
          </div>
          <div className={styles.value}>
            <div className={styles.value_icon}>👨‍⚕️</div>
            <div className={styles.value_title}>Responsibility</div>
            <div className={styles.value_text}>Accurate and timely diagnoses, administering medications and treatments.</div>
          </div>
          <div className={styles.value}>
            <div className={styles.value_icon}>👐</div>
            <div className={styles.value_title}>Openness</div>
            <div className={styles.value_text}>We are glad to answer any your questions about your pet health.</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;

 
// pages/about.js
import React from 'react';
import '../Style/About.css'; // Asumăm că stilurile sunt în acest fișier

const About = () => {
  return (
    <div className="about-us-background">
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About us</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-image-container">
          <img src="hospital-image.jpg" alt="Veterinary Hospital" />
          <button>Show on map</button>
          <p>We are a modern multidisciplinary veterinary hospital with a full range of services: from diagnosis and treatment to medical support of pets of different types, weight and age.</p>
        </div>
        <div className="about-us-values">
          <div className="value">
            <div className="value-icon">🤲</div>
            <div className="value-title">Care</div>
            <div className="value-text">Provide the necessary treatment and care to help your pet recover.</div>
          </div>
          <div className="value">
            <div className="value-icon">💼</div>
            <div className="value-title">Professionalism</div>
            <div className="value-text">Provide the necessary treatment and care to help your pet recover.</div>
          </div>
          <div className="value">
            <div className="value-icon">👨‍⚕️</div>
            <div className="value-title">Responsibility</div>
            <div className="value-text">Accurate and timely diagnoses, administering medications and treatments.</div>
          </div>
          <div className="value">
            <div className="value-icon">👐</div>
            <div className="value-title">Openness</div>
            <div className="value-text">We are glad to answer any your questions about your pet health.</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;

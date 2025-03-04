import React from "react";
import "../styles/pages/AboutMission.scss";
import {
  FaRegLightbulb,
  FaUserCheck,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";
import BackButton from "../components/BackButton/BackButton";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <div className="back">
        <BackButton />
      </div>
      <div className="mission-content">
        <h2>Our Approach & Mission</h2>
        <p>
          At <strong>Optimal Minds Brain Wellness Clinic</strong>, we believe in
          **holistic, ethical, and patient-centered mental health care**. Our
          mission is to **merge neuroscience with compassionate therapy**,
          ensuring **individualized and evidence-based treatments** for every
          patient.
        </p>
      </div>

      {/* Card Grid */}
      <div className="mission-grid">
        <div className="mission-card large">
          <FaRegLightbulb className="icon" />
          <h3>Our Core Principles</h3>
          <p>
            We prioritize **personalized care, science-backed treatments, and
            multidisciplinary healing** for mental well-being.
          </p>
        </div>

        <div className="mission-card">
          <FaUserCheck className="icon" />
          <h3>Holistic & Patient-Centered Care</h3>
          <p>
            We address the **mind, body, and brain**, ensuring complete recovery
            through a holistic approach.
          </p>
        </div>

        <div className="mission-card">
          <FaBrain className="icon" />
          <h3>Breaking the Stigma</h3>
          <p>
            Through **awareness campaigns, corporate programs, and educational
            initiatives**, we normalize mental health discussions.
          </p>
        </div>

        <div className="mission-card large">
          <FaHandsHelping className="icon" />
          <h3>Innovation & Research</h3>
          <p>
            We integrate **advancements in psychiatry, neuroscience, and
            behavioral science** for cutting-edge treatments.
          </p>
          <img
            src="https://placehold.co/1200x500"
            alt="Innovation in Mental Health"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;

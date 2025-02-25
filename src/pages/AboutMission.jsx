import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/pages/AboutMission.scss";
import { FaRegLightbulb, FaUserCheck, FaBrain, FaHandsHelping } from "react-icons/fa";
import BackButton from "../components/BackButton/BackButton";

gsap.registerPlugin(ScrollTrigger);

const AboutMission = () => {
  const missionRef = useRef(null);
  const cardRefs = useRef([]);
  
  useEffect(() => {
    gsap.fromTo(
      missionRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="about-mission">
      <BackButton />
      <div className="mission-content" ref={missionRef}>
        <h2>Our Approach & Mission</h2>
        <p>
          At <strong>Optimal Minds Brain Wellness Clinic</strong>, we believe in **holistic, ethical, and patient-centered mental health care**. 
          Our mission is to **merge neuroscience with compassionate therapy**, ensuring **individualized and evidence-based treatments** for every patient.
        </p>
      </div>

      {/* Card Grid */}
      <div className="mission-grid">
        {/* Core Principles */}
        <div className="mission-card large" ref={(el) => cardRefs.current.push(el)}>
          <FaRegLightbulb className="icon" />
          <h3>Our Core Principles</h3>
          <p>
            We prioritize **personalized care, science-backed treatments, and multidisciplinary healing** for mental well-being.
          </p>
        </div>

        {/* Holistic Care */}
        <div className="mission-card" ref={(el) => cardRefs.current.push(el)}>
          <FaUserCheck className="icon" />
          <h3>Holistic & Patient-Centered Care</h3>
          <p>We address the **mind, body, and brain**, ensuring complete recovery through a holistic approach.</p>
        </div>

        {/* Breaking the Stigma */}
        <div className="mission-card" ref={(el) => cardRefs.current.push(el)}>
          <FaBrain className="icon" />
          <h3>Breaking the Stigma</h3>
          <p>Through **awareness campaigns, corporate programs, and educational initiatives**, we normalize mental health discussions.</p>
        </div>

        {/* Innovation & Research */}
        <div className="mission-card large" ref={(el) => cardRefs.current.push(el)}>
          <FaHandsHelping className="icon" />
          <h3>Innovation & Research</h3>
          <p>
            We integrate **advancements in psychiatry, neuroscience, and behavioral science** for cutting-edge treatments.
          </p>
          <img src="https://placehold.co/1200x500" alt="Innovation in Mental Health" />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;

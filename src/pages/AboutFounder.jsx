import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/pages/AboutFounder.scss";
import BackButton from "../components/BackButton/BackButton";

gsap.registerPlugin(ScrollTrigger);

const AboutFounder = () => {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="about-founder">
      <BackButton />

      {/* Hero Section */}
      <div className="founder-hero">
        <img src="https://placehold.co/1600x700" alt="Founder Banner" />
        <div className="hero-overlay">
          <h1>Meet Our Founder</h1>
          <p>Dr. Lakshmi Sanjay - Visionary, Psychiatrist, Mental Health Coach</p>
        </div>
      </div>

      {/* Founder Information */}
      <div className="founder-container">
        <motion.div
          className="founder-image"
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://placehold.co/600x800" alt="Dr. Lakshmi Sanjay" />
        </motion.div>

        <motion.div
          className="founder-content"
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Dr. Lakshmi Sanjay - Founder & Director</h2>
          <p>
            The visionary behind <strong>Optimal Minds Brain Wellness Clinic</strong>,
            she is a <strong>renowned psychiatrist, mental health coach, and advocate</strong> 
            for holistic psychiatric care.
          </p>
          <p>
            With expertise in <strong>neuropsychiatry, psychotherapy, and holistic healing</strong>,
            she has transformed countless lives with **evidence-based, compassionate care**.
          </p>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="vision-section" ref={(el) => sections.current.push(el)}>
        <h3>🔹 Her Vision</h3>
        <p>
          Mental health is more than treating disorders; it's about **building emotional 
          resilience and a fulfilling life**.
        </p>
        <blockquote>
          <em>
            "Mental health is not just about removing distress—it's about empowering individuals
            to lead fulfilling, meaningful lives."
          </em>
        </blockquote>
      </div>

      {/* Expertise Section - Grid Layout */}
      <div className="expertise-grid" ref={(el) => sections.current.push(el)}>
        <div className="expertise-card">
          <h3>✅ Child & Adolescent Mental Health</h3>
          <p>Autism, ADHD, Behavioral Issues</p>
        </div>
        <div className="expertise-card">
          <h3>✅ Adult Neuropsychiatric Disorders</h3>
          <p>Depression, Anxiety, Bipolar, OCD, PTSD</p>
        </div>
        <div className="expertise-card">
          <h3>✅ Addiction Recovery</h3>
          <p>Internet, Gaming, Alcohol & Drug Addiction</p>
        </div>
        <div className="expertise-card">
          <h3>✅ Senior Mental Health</h3>
          <p>Dementia, Elderly Depression, Cognitive Disorders</p>
        </div>
      </div>

      {/* Contributions & Initiatives */}
      <div className="contributions-section" ref={(el) => sections.current.push(el)}>
        <h3>🔹 Contributions & Initiatives</h3>
        <p>🌱 **Mental Health Awareness** - Conducts seminars, corporate wellness programs.</p>
        <p>💡 **"Heart to Heart" Campaign** - Improves mental well-being in students & faculty.</p>
        <p>📖 **Research & Education** - Integrates modern psychiatry with traditional healing.</p>
      </div>

      {/* Message from the Founder */}
      <div className="message-section" ref={(el) => sections.current.push(el)}>
        <h3>🔹 Message from Dr. Lakshmi Sanjay</h3>
        <blockquote>
          <em>
            "My mission is to create a safe space where individuals receive compassionate, evidence-based
            psychiatric care that not only heals but empowers them."
          </em>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutFounder;

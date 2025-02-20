import { useRef } from "react";
import { useNavigate } from "react-router";
import "../styles/AboutUs.scss";
import aboutHero from "../assets/images/hero.png";
// import founderImg from "../assets/images/founder.jpg";
// import missionImg from "../assets/images/mission.jpg";
// import csrImg from "../assets/images/csr.jpg";

const AboutUs = () => {
  const storyRef = useRef(null);
  const impactRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <img src={aboutHero} alt="About Optimal Minds" className="hero-image" />
        <div className="hero-content">
          <h1>Discover Our Story</h1>
          <p>Transforming Mental Healthcare with Compassion and Innovation</p>
          <button onClick={() => scrollToSection(storyRef)} className="hero-button">Explore More</button>
        </div>
      </div>

      {/* Our Story Section */}
      <section ref={storyRef} className="about-section">
        <h2>Our Story</h2>
        <div className="story-container">
          <div className="story-card">
            <img src={aboutHero} alt="Founder" />
            <h3>Our Founder</h3>
            <p>
              Dr. Lakshmi Sanjay envisioned a world where mental healthcare is accessible, compassionate, and innovative.
            </p>
          </div>
          <div className="story-card">
            <img src={aboutHero} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              At Optimal Minds, we integrate holistic wellness with scientific advancements to nurture mental well-being.
            </p>
          </div>
          <div className="story-card">
            <img src={aboutHero} alt="CSR" />
            <h3>Our Commitment</h3>
            <p>
              We actively engage in outreach programs to break stigma and bring mental health solutions to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section ref={impactRef} className="about-section impact-section">
        <h2>Our Impact</h2>
        <p>
          With years of dedicated service, we have reached thousands through therapy, educational programs, and community initiatives.
        </p>
        <div className="impact-stats">
          <div className="stat-box">
            <h3>10K+</h3>
            <p>Patients Helped</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Workshops Conducted</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Community Partnerships</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="about-section contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions? Reach out to us and let’s work together for a better tomorrow.</p>
        <button onClick={() => navigate("/contact")} className="contact-button">Contact Us</button>
      </section>
    </section>
  );
};

export default AboutUs;

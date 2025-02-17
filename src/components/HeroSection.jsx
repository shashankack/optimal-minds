import { useRef, useEffect } from "react";
import "../styles/HeroSection.scss";
import heroBg from "../assets/images/hero-bg.png";
import heroImg from "../assets/images/hero.png";
import bgWhite from "../assets/images/bg-white.png";
import { FaUserMd, FaBrain, FaHandsHelping } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <>
      <section className="hero-section">
        <img src={heroBg} />

        <div className="hero-content">
          <h1>Your Journey to Mental</h1>
          <h1>Wellness Starts Here.</h1>
          <p>Expert-Led, Compassionate Care for Your Mental Well-Being</p>
          <button className="cta-button">Book an Appointment</button>
        </div>
      </section>

      {/* <section className="about-section">
        <div className="background-image">
          <img src={bgWhite} alt="" />
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={heroImg} alt="" />
          </div>
          <div className="about-text">
            <h2>Why Optimal Minds</h2>
            <p>
              Optimal Minds offers holistic psychiatric care with advanced
              treatments for ADHD, autism, anxiety, OCD, PTSD, addiction, and
              more. We provide expert guidance, evidence-based interventions,
              and compassionate support for your mental well-being.
              <ul>
                <li>Expert-Led, Compassionate Care</li>
                <li>Cutting-Edge Treatments & Technology</li>
                <li>Holistic & Multidisciplinary Approach</li>
              </ul>
            </p>
            <button className="cta-button">Meet our Founder</button>
          </div>
        </div>
      </section> */}

      <section className="about-section" ref={aboutRef}>
        <img src={bgWhite} className="bg-layer" />
        <div className="about-container">
          <div className="about-image" ref={imageRef}>
            <img src={heroImg} alt="About Optimal Minds" />
          </div>

          <div className="about-content" ref={contentRef}>
            <h2>Why Choose Optimal Minds?</h2>
            <p>
              At Optimal Minds Brain Wellness Clinic, we provide compassionate,
              holistic psychiatric care through advanced interventions and
              counseling, offering ethical, science-backed treatments for
              individuals of all ages, from childhood neurodevelopmental
              disorders to adult anxiety, PTSD, addiction, and geriatric mental
              health.
            </p>

            <div className="about-highlights">
              <div className="top">
                <div className="highlight-item">
                  <FaBrain className="icon" />
                  <p>Advanced Science-Based Treatments</p>
                </div>
              </div>
              <div className="bottom">
                <div className="highlight-item">
                  <FaUserMd className="icon" />
                  <p>Expert Mental Health Professionals</p>
                </div>
                <div className="highlight-item">
                  <FaHandsHelping className="icon" />
                  <p>Holistic & Compassionate Care</p>
                </div>
              </div>
            </div>

            <div className="about-links">
              <button
                onClick={() => handleRedirect("/about/founder")}
                className="about-link"
                ref={contentRef}
              >
                Our Founder’s Vision
              </button>
              <button
                onClick={() => handleRedirect("/about/mission")}
                className="about-link"
                ref={contentRef}
              >
                Our Approach & Mission
              </button>
              <button
                onClick={() => handleRedirect("/about/csr")}
                className="about-link"
                ref={contentRef}
              >
                Mental Health Awareness (CSR)
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

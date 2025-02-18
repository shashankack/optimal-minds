import { useRef, useEffect } from "react";
import "../styles/HeroSection.scss";
import heroBg from "../assets/images/hero-bg.png";
import heroImg from "../assets/images/hero.png";
import bgWhite from "../assets/images/bg-white.png";
import { FaUserMd, FaBrain, FaHandsHelping } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router";
import VideoCards from "./VideoCards";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const videoContentRef = useRef(null);
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const typeSplit = new SplitType(videoContentRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from(typeSplit.words, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.05,
      scrollTrigger: {
        trigger: videoContentRef.current,
        start: "top 90%",
        // end: "top 30%",
        // scrub: 1,
      },
    });

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
          <p>
            Comprehensive mental health care guided by leading experts in
            neuropsychiatry. From anxiety and depression to neurodevelopmental
            care, we provide tailored treatment for every individual.
          </p>
          <div className="cta-buttons">
            <button
              className="cta-button primary"
              onClick={() => handleRedirect("/contact")}
            >
              Book an Appointment
            </button>
            <button
              className="cta-button secondary"
              onClick={() => handleRedirect("/services")}
            >
              Learn More
            </button>
          </div>
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

          <div className="about-preview" ref={contentRef}>
            <h2>Why Choose Optimal Minds?</h2>
            <p>
              At Optimal Minds Brain Wellness Clinic, we combine advanced
              neuropsychiatric care with a holistic approach to mental
              well-being. Our compassionate experts provide personalized
              treatment plans for all age groups.
            </p>
            <button
              className="cta-button secondary"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>

            {/* <div className="about-highlights">
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
            </div> */}

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

      <section className="video-cards-section">
        <VideoCards />
        <p className="section-description" ref={videoContentRef}>
          Transforming mental wellness through expert care, advanced treatments
          and a holistic approach because your mind matters!
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-content">
          <div className="services-card">
            <div className="services-image">
              <img src={heroImg} alt="Service 1" />
            </div>
            <div className="services-text">
              <FaUserMd className="service-icon" /> {/* add services icon */}
              <h3>Psychiatry</h3>
              <p>
                Expert psychiatric care for ADHD, anxiety, depression, bipolar
                disorder, and more.
              </p>
            </div>
          </div>

          <button className="cta-button">View All Services</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

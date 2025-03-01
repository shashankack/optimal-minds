import { useRef, useEffect } from "react";
import "../styles/pages/home.scss";
import heroBg from "../assets/images/hero-bg.png";
import { HashLink } from "react-router-hash-link";
import bgWhite from "../assets/images/bg-white.png";
import { faqData, servicesData, testimonials } from "../data/dummyData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router";
import VideoCards from "../components/VideoCards";
import SplitType from "split-type";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Quotes/Testimonials";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ/FAQ";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const aboutRef = useRef(null);
  const videoContentRef = useRef(null);
  const heroContentRef = useRef(null);
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
      },
    });

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      heroContentRef.current,
      { opacity: 0, x: -700 },
      {
        opacity: 1,
        delay: 0.5,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <>
      <section className="hero-section" style={{ display: "" }}>
        <img src={heroBg} />

        <div className="hero-content" ref={heroContentRef}>
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

      <section className="about-section" style={{ display: "" }}>
        <div className="about-content" ref={aboutRef}>
          <h2>About Optimal Minds</h2>
          <p>
            At Optimal Minds, we provide holistic psychiatric care, advanced
            interventions, and counseling to enhance your overall well-being.
            Our center was built to clear your doubts, conduct initial
            assessments, empower you with knowledge about treatment plans, and
            offer reassurance about your mental health.
          </p>
          <p>
            We offer compassionate, all-encompassing care for various mental
            health conditions, from ADHD, autism care support, childhood
            behavioral disturbances, to adolescent depression, adult anxiety
            disorders, OCD, PTSD, addiction disorders, and dementia.
          </p>
          <p>
            Our mission is to help you find inner peace by learning strategies
            to develop and sustain resilience.
          </p>
          <button
            className="cta-button secondary"
            onClick={() => handleRedirect("/about")}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="video-cards-section" style={{ display: "" }}>
        <VideoCards />
        <p className="section-description" ref={videoContentRef}>
          Transforming mental wellness through expert care, advanced treatments,
          and a holistic approach because your mind matters!
        </p>
      </section>

      {/* Services Section */}
      <div className="services" id="services" style={{ display: "" }}>
        <Services servicesData={servicesData} />
      </div>

      {/* Testimonials Section */}
      <div style={{ display: "" }}>
        <Testimonials testimonials={testimonials} background={bgWhite} />
      </div>

      <section className="faq-contact-section" style={{ display: "" }}>
        <FAQ data={faqData} title="Your Mental Health Questions, Answered" />
        <Contact />
      </section>
    </>
  );
};

export default Home;

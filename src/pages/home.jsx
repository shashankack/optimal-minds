import { useRef, useEffect } from "react";
import "../styles/pages/home.scss";
import heroBg from "../assets/images/hero-bg.png";
import heroImg from "../assets/images/hero.png";
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
  // const imageRef = useRef(null);
  // const contentRef = useRef(null);
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

    // gsap.fromTo(
    //   imageRef.current,
    //   { opacity: 0, x: -100 },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: aboutRef.current,
    //       start: "top 70%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   contentRef.current,
    //   { opacity: 0, x: 100 },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: aboutRef.current,
    //       start: "top 70%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   }
    // );
  }, []);

  return (
    <>
      <section className="hero-section">
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

      {/* <section className="about-section" ref={aboutRef}>
        <img src={bgWhite} className="bg-layer" />
        <div className="about-container">
          <div className="about-image" ref={imageRef}>
            <img
              src={heroImg}
              alt="About Optimal Minds"
              style={{
                WebkitMaskImage: `url(${bgWhite})`,
                maskImage: `url(${bgWhite})`,
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
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
          </div>
        </div>
      </section> */}

      <section className="about-section">
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
          <button className="cta-button secondary" onClick={() => navigate("/services")}>
            Learn More
          </button>
        </div>
      </section>

      <section className="video-cards-section">
        <VideoCards />
        <p className="section-description" ref={videoContentRef}>
          Transforming mental wellness through expert care, advanced treatments,
          and a holistic approach because your mind matters!
        </p>
      </section>

      {/* Services Section */}
      <Services servicesData={servicesData} />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} background={bgWhite} />

      <section className="faq-contact-section">
        <FAQ data={faqData} title="Your Mental Health Questions, Answered"/>
        <Contact />
      </section>
    </>
  );
};

export default Home;

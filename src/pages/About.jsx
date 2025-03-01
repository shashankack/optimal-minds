import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/pages/about.scss";
import aboutImage from "../assets/images/about-bg.jpg";
import { useNavigate } from "react-router";
import BackButton from "../components/BackButton/BackButton";

const About = () => {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const linksRef = useRef(null);
  const imageRef = useRef(null);
  const nav = useNavigate();

  const handleRedirect = (link) => {
    nav(link);
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1.1, duration: 1.2, ease: "power3.inOut" },
      );

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "+=0.2"
      );


      tl.fromTo(
        textRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(
        linksRef.current.children,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: .5, stagger: 0.1, ease: "power3.out" },
        "-=0.5"
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-container" ref={aboutRef}>
      <BackButton />
      {/* Full-width Image */}
      <div className="about-banner">
        <img
          ref={imageRef}
          src={aboutImage}
          alt="About Optimal Minds"
          className="about-image"
        />
      </div>

      {/* Content Section */}
      <div className="about-content" ref={titleRef}>
        <h1>About Optimal Minds</h1>
        <p ref={textRef}>
          At Optimal Minds, we provide holistic psychiatric care, advanced interventions, 
          and counseling to enhance mental well-being. Our mission is to empower individuals 
          with knowledge and support for a healthier mind.
        </p>
        
        {/* Button Links */}
        <div className="about-links" ref={linksRef}>
          <button onClick={() => handleRedirect("/about/founder")} className="about-link">
            Meet Our Founder
          </button>
          <button onClick={() => handleRedirect("/about/mission")} className="about-link">
            Our Mission
          </button>
          <button onClick={() => handleRedirect("/about/csr")} className="about-link">
            CSR Initiatives
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

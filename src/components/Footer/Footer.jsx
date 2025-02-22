import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whiteLogo from "../../assets/images/white-logo.png";
import "./Footer.scss";
import footerBg from "../../assets/images/footer-bg.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-bg">
        <img src={footerBg} alt="Footer Background" />
      </div>
      <div className="footer__container">
        <div className="footer__column footer__brand">
          <img src={whiteLogo} alt="Optimal Minds Logo" />
          <h3>Optimal Minds Brain Wellness Clinic</h3>
          <p>
            Providing holistic psychiatric care, advanced interventions, and
            counseling to enhance your well-being.
          </p>
        </div>

        <div className="footer__column footer__contact">
          <h3>Contact Us</h3>
          <p>Adyar, Chennai</p>
          <p>Phone: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a></p>
          <p>Email: <a href="mailto:contact@optimalminds.com">contact@optimalminds.com</a></p>
        </div>

        <div className="footer__column footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/conditions">Conditions We Treat</a></li>
            <li><a href="/contact">Book an Appointment</a></li>
          </ul>
        </div>

        <div className="footer__column footer__social">
          <h3>Follow Us</h3>
          <div className="footer__social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Optimal Minds. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

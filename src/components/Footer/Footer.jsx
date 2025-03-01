import React, { useState, useEffect } from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/white-logo.png";
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={footerLogo} alt="Optimal Minds Logo" />
          <p>Your Sanctuary for Mindful Psychiatry and Counseling</p>
        </div>

        <div className="nav-section">
          <div className="nav-links">
            {[
              {
                title: "About Us",
                links: [
                  "About Us",
                  "Contact Us",
                  "Our Services",
                  "Privacy Policy",
                ],
              },
              {
                title: "Quick Links",
                links: [
                  "Why Us",
                  "Our Specialized Services",
                  "Feedback",
                  "Blogs",
                ],
              },
              {
                title: "Contact Us",
                links: ["Adyar, Chennai", "+91 97008 55553"],
              },
            ].map((group, index) => (
              <div className="nav-group" key={index}>
                <div
                  className="nav-header"
                  onClick={() => isMobile && toggleAccordion(index)}
                >
                  <h2>{group.title}</h2>
                  {isMobile && (
                    <IoIosArrowDown
                      className={`arrow-icon ${
                        activeIndex === index ? "open" : ""
                      }`}
                    />
                  )}
                </div>
                <nav
                  className={`nav-link ${
                    isMobile ? (activeIndex === index ? "open" : "closed") : ""
                  }`}
                >
                  {group.links.map((link, i) => (
                    <a href="#" key={i}>
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="social-links">
            <ul>
              <li>
                <a href="#">
                  <IoLogoYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright-section">
        <hr />
        <p>
          &copy; {new Date().getFullYear()} Optimal Minds. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

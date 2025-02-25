import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/white-logo.png";

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={footerLogo} alt="Optimal Minds Logo" />
          <p>Your Sanctuary for Mindful Psychiatry and Counseling</p>
        </div>

        <div className="nav-section">
          <div className="nav-links">
            <div className="nav-group">
              <h2>About Us</h2>
              <nav className="nav-link">
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Our Services</a>
                <a href="#">Privacy Policy</a>
              </nav>
            </div>
            <div className="nav-group">
              <h2>Quick Links</h2>
              <nav className="nav-link">
                <a href="#">Why Us</a>
                <a href="#">Our Specialized Services</a>
                <a href="#">Feedback</a>
                <a href="#">Blogs</a>
              </nav>
            </div>
            <div className="nav-group">
              <h2>Contact Us</h2>
              <nav className="nav-link">
                <a href="#">Adyar, Chennai</a>
                <a href="#">+91 97008 55553</a>
              </nav>
            </div>
          </div>

          <div className="social-links">
            <ul>
              <li>
                <a href="">
                  <IoLogoYoutube />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <hr />
        <p>&copy; 2021 Optimal Minds. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

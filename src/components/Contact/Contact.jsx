import { IoMailOutline, IoLogoInstagram, IoCallOutline } from "react-icons/io5";

import "./Contact.scss";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info-container">
            <h2>Our Contact Information</h2>
            <p>Get in touch through any of the following channels:</p>
            <div className="info-card">
              <IoCallOutline className="icon" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+919700855553">+91 97008 55553</a>
              </div>
            </div>
            <div className="info-card">
              <IoLogoInstagram className="icon" />
              <div>
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/optimalmindsclinic">
                  @optimalmindsclinic
                </a>
              </div>
            </div>
            <div className="info-card">
              <IoMailOutline className="icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:optimalmindschennai@gmail.com">
                  optimalmindschennai@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container" id="contact-form">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section
        className="map-section"
        style={{
          width: "100%",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.478361013553!2d80.24637687590243!3d13.005181014139442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267215e7a588d%3A0x7fca9fd73ca4928!2sOptimal%20Minds%20Brain%20Wellness%20Clinic!5e0!3m2!1sen!2sin!4v1740371488919!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;

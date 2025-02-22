import "./Contact.scss";
import {
  IoLocationOutline,
  IoLogoInstagram,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus in consequuntur quam quas explicabo rem aut corrupti
            doloribus iusto, ex quae eveniet dolorem quod. Voluptatum aliquid
            officia harum similique vero!
          </p>
          <div className="icons-grid">
            <div className="grid-item">
              <div className="icon-bg">
                <IoCallOutline color="#fff" size={"40px"} />
              </div>
              <div className="text">
                <h4>Phone</h4>
                <p>123-456-7890</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="icon-bg">
                <IoCallOutline color="#fff" size={"40px"} />
              </div>
              <div className="text">
                <h4>Email</h4>
                <p>123-456-7890</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="icon-bg">
                <IoLocationOutline color="#fff" size={"40px"} />
              </div>
              <div className="text">
                <h4>Address</h4>
                <p>Adyar, Chennai</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="icon-bg">
                <IoCallOutline color="#fff" size={"40px"} />
              </div>
              <div className="text">
                <h4>Instagram</h4>
                <p>123-456-7890</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="socials">
            <h2>Social Media</h2>
            <FaFacebook color="#438423" size={"40px"} />
            <FaTwitter color="#438423" size={"40px"} />
            <FaYoutube color="#438423" size={"40px"} />
          </div>
        </div>
      </div>
      <div className="right">Right</div>
    </div>
  );
};

export default Contact;

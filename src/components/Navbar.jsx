import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shrink navbar when scrolling down past 50px
      setIsShrunk(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 900) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`navbar ${isShrunk ? "shrink" : ""} ${
        isHidden ? "hidden" : ""
      }`}
    >
      <div className="container">
        <img src={logo} alt="logo" className="logo" />

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <ul>
            <li>
              <a href="#" data-text="Home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" data-text="About Us">
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#" data-text="Our Services">
                <span>Our Services</span>
              </a>
            </li>
            <button className="cta-button">Contact Us</button>
          </ul>
        </nav>

        {/* Custom Hamburger Icon */}
        <div
          id="nav-icon3"
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
        </ul>
        <button className="cta-button">Contact Us</button>
      </div>
    </header>
  );
};

export default Navbar;

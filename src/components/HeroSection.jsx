import "../styles/HeroSection.scss";
import heroBg from "../assets/images/hero-bg.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={heroBg} />
    </div>
  );
};

export default HeroSection;

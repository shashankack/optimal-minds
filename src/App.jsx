import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About.jsx";
import AboutFounder from "./pages/AboutFounder.jsx";
import AboutCSR from "./pages/AboutCSR.jsx";
import AboutMission from "./pages/AboutMission.jsx";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/founder" element={<AboutFounder />} />
        <Route path="/about/mission" element={<AboutMission />} />
        <Route path="/about/csr" element={<AboutCSR />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

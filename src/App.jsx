import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/Home.jsx";
// import AboutUsPage from "./pages/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

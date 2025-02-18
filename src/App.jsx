import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
// import About from "./pages/about-us.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

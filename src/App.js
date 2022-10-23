import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import WeatherState from "./contexts/WeatherState";

function App() {
  return (
    <WeatherState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </WeatherState>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import WeatherContextProvider from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherContextProvider>
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
    </WeatherContextProvider>
  );
}

export default App;

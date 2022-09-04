import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeatherState from "./contexts/WeatherState";

function App() {
  return (
    <WeatherState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </WeatherState>
  );
}

export default App;

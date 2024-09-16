import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';

const NavigationComponent = () => {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default NavigationComponent;

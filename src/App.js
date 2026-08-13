import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './footer';
import Header from './header';
import LandingPage from './landingpage';
import About from './about';
import VisionMission from './visionmission';
import Services from './services';
import Values from './values';
import Partners from './partners';
import Collaboration from './collaboration';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/services" element={<Services />} />
        <Route path="/values" element={<Values />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

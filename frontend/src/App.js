import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 
import './style.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Technituber from './pages/Technituber/Technituber';
import Home from './pages/Home/Home';
import Facilities from './pages/Facilities/Facilities';
import About from './pages/About/About';
import Varieties from './pages/Varieties/Varieties';
import OurBusiness from './pages/OurBusiness/OurBusiness';
import { useLocation } from 'react-router-dom';
import ScrollToTop from "./scrolltop";
import ComingSoon from './components/ComingSoon/ComingSoon'; 

function App() {
  return (
    <BrowserRouter>
      <LocationUpdater />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="varieties" element={<Varieties />} />
        <Route path="technituber" element={<Technituber />} />
        <Route path="our-business" element={<OurBusiness />} />
        <Route path="coming-soon" element={<ComingSoon />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function LocationUpdater() {
  const location = useLocation(); // Get the current location (path)

  useEffect(() => {
    // Check if we are on the homepage
    if (location.pathname === '/') {
      document.body.classList.add('homepage');
    } else {
      document.body.classList.remove('homepage');
    }
  }, [location]);

  return null; // We don't need to render anything here
}

export default App;

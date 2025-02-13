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
import VarietiesParts from './pages/Varieties/VarietiesParts';
import Testimonials from './pages/Testimonials/Testimonials';
import ContactUs from './pages/ContactUs/ContactUs';
import Compilance from './pages/infopages/Compliance';
import CSRpolicy from './pages/infopages/CSRpolicy';
import Disclaimer from './pages/infopages/Disclaimer';
import Termscondition from './pages/infopages/Termscondition';
import PrivacyPolicy from './pages/infopages/PrivacyPolicy';

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
        <Route path="varieties-all" element={<VarietiesParts />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="compilance" element={<Compilance />} />
        <Route path="corporate-social-responsibility-policy" element={<CSRpolicy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="terms&condition" element={<Termscondition />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="coming-soon" element={<ComingSoon />} /> */}

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

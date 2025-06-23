import React from 'react';
import PropTypes from 'prop-types';
import './homebanner.scss';
import { Link } from 'react-router';

const HomeBanner = () => (
  <div className="homebanner"> 
  
    <div className="homeMainBanner" style={{ userSelect: 'none' }}>
        <div className="homeLogo text-center" style={{ userSelect: 'none' }}>
          <div className="logoImage">
            <img src={process.env.PUBLIC_URL + '/images/homeLogo.png'} alt="" />
          </div>
        </div>

        <div className="homeNavMain d-flex justify-content-between align-items-center" style={{ userSelect: 'none' }}>
          <div className="homeleftMenu" style={{ userSelect: 'none' }}>
            <div className="text-center lefttext aboutMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/aboutLogo.png'} alt="" />
              <Link to="/about-us">About Us</Link>
            </div>
            <div className="text-center facilitiesMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/facilityImage.png'} alt="" />
              <Link to="/facilities">Facilities</Link>


            </div>
            <div className="text-center lefttext testimonialsMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/varitiesImage.png'} alt="" />
              <Link to="/varieties">Varieties</Link>


            </div>
          </div>
          <div className="homeCenterMenu">
            <img src={process.env.PUBLIC_URL + '/images/menu-center.png'} alt="" />
          </div>
          <div className="homerightMenu" style={{ userSelect: 'none' }}>
            <div className="text-center righttext varietiesMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/businessImage.png'} alt="" />
              <Link to="/our-business">Our Business</Link>

            </div>
            <div className="text-center technituberMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/techImage.png'} alt="" />
              <Link to="/technituber"> Technituber®</Link>
            </div>
            <div className="text-center righttext businessMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/testimonialImage.png'} alt="" />
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>
        </div>
      </div>
  </div>
);

HomeBanner.propTypes = {};

HomeBanner.defaultProps = {};

export default HomeBanner;

import React from 'react';
import PropTypes from 'prop-types';
import BannerTicker from '../bannerticker/bannerticker';
import Sidesticks from '../Sidesticks/Sidesticks';
import './Reusebanner.scss';
import Slider from "react-slick";


const settings = {
  fade: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  speed: 5000,
  autoplaySpeed: 5000
};


const Reusebanner = ({ pageTitle, titleImage, sliderImages }) => (
  <>
    <section className="main container-fluid p-0 m-0 position-relative mx-auto CommonBanner" data-testid="CommonBanner">

      <div className="slider-container">
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={process.env.PUBLIC_URL + image.url} alt={image.alt || `Slide ${index + 1}`} />
              <div className="overlay"></div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="page-info d-none d-sm-block">
        <img src={process.env.PUBLIC_URL + titleImage} alt="Page title image" />
        <h2>{pageTitle}</h2>
      </div>
    </section>
    <BannerTicker /> 
  </>
);

Reusebanner.propTypes = {};

Reusebanner.defaultProps = {};

export default Reusebanner;

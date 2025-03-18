import React from 'react';
import PropTypes from 'prop-types';
import BannerTicker from '../bannerticker/bannerticker';
import Sidesticks from '../Sidesticks/Sidesticks';
import './CommonBanner.scss';
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


const CommonBanner = ({ pageTitle, titleImage }) => (


  <>
    <section className="main container-fluid p-0 m-0 position-relative mx-auto CommonBanner" data-testid="CommonBanner">

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/businessnew.webp'} />
            <div className="overlay"></div>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/businessmore.webp'} />
            <div className="overlay"></div>
          </div>
        </Slider>
      </div>

      <div className="page-info d-none d-sm-block">
        <img src={process.env.PUBLIC_URL + titleImage} />
        <h2>{pageTitle}</h2>
      </div>
    </section>
    <BannerTicker />

  </>
);

CommonBanner.propTypes = {};

CommonBanner.defaultProps = {};

export default CommonBanner;

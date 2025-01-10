import React from 'react';
import PropTypes from 'prop-types';
import BannerTicker from '../bannerticker/bannerticker';
import Sidesticks from '../Sidesticks/Sidesticks';
import './AboutBanner.scss';
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
    <section className="main container-fluid p-0 m-0 position-relative mx-auto AboutBanner" data-testid="CommonBanner">

      <div className="slider-container">
        <Slider {...settings}>
          


          <div>
            <img src={process.env.PUBLIC_URL + 'images/banner12.png'} />
            <div className='visionandfuture container-xs'>
              <h2>
              Our Core Values
              </h2>
              <p>
              Technico’s core values are aimed at developing a customer centric, innovative, values ethics & integrity, trustworthy organisation with the guiding principle ‘Farmer first & people first’.
              </p>

            </div>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + 'images/aboucompany.webp'} />
            <div className='visionandfuture container-xs'>
              <h2>
                Vision
              </h2>
              <h3>
                Our dream of the future
              </h3>
              <p>
              
To be a leading global Agri value chain player, delivering innovative solutions for climate smart agriculture for farming community, contributing to global food & nutrition security and  enhancing value for all stakeholders.
              </p>

            </div>
          </div>

        </Slider>
      </div>
      {/* <div className="overlay"></div> */}
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

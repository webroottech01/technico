import React from 'react';
import PropTypes from 'prop-types';
import './ComingSoon.scss';
import BannerTicker from '../bannerticker/bannerticker';
import Slider from "react-slick";
 

const settings = {
  fade: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  speed: 3000,
  autoplaySpeed: 5000
}; 

const ComingSoon = () => (


  <>
    <section className="main container-fluid p-0 m-0 position-relative mx-auto AboutBanner" data-testid="CommonBanner">

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + 'images/aboutmainnew.jpg'} />
            <div className='visionandfuture container-xs'>
              <h2>
                Coming Soon...
              </h2>
             

            </div>
          </div>


          <div>
            <img src={process.env.PUBLIC_URL + 'images/banner12.png'} />
            <div className='visionandfuture container-xs'>
            <h2>
                Coming Soon...
              </h2>

            </div>
          </div>
          
        </Slider>
      </div>
      {/* <div className="overlay"></div> */}
      <div className="page-info d-none d-sm-block">
        <img src={process.env.PUBLIC_URL + 'images/varietieslogo.png'} />
        <h2>Coming Soon</h2>
      </div>
    </section>
    <BannerTicker />

  </>
);

ComingSoon.propTypes = {};

ComingSoon.defaultProps = {};

export default ComingSoon;

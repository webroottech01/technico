import React from 'react';
import Slider from "react-slick";
import './bannerticker.scss';


const settings = {
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ] 
};

const BannerTicker = () => (
  <div className="bannerticker" data-testid="bannerticker">
    <div className="slider-container">
      <Slider {...settings}>

          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>
          <p>technico</p>

        
      
      </Slider>
    </div>
  </div>
);


export default BannerTicker;

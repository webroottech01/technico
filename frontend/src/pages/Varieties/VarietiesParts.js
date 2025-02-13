import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './Varieties.scss';
import VarietiesTables from '../../components/VarietiesTypes/VarietiesTables';
import { useLocation } from 'react-router-dom';
import VarietiesFries from "../../components/VarietiesTypes/VarietiesFries";
import VarietiesChips from "../../components/VarietiesTypes/VarietiesChips";

const VarietiesParts = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);

    const initialSlide = location.state?.categoryIndex || 0;

    sliderRef1.current.slickGoTo(initialSlide);
    sliderRef2.current.slickGoTo(initialSlide);

    // console.log(initialSlide)
    if (sliderRef1.current) {

    }
  }, [location]);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    className:"stripslider center",
    asNavFor:nav1,
    ref:sliderRef2,
    swipeToSlide:true,
    focusOnSelect:true,
    centerMode:true,
    centerPadding:"0",
    arrows:false,
    // fade:true
  };

  const slides = [
    { src: 'images/friessbowl.webp', alt: 'French Fries', label: 'French Fries' },
    { src: 'images/chipsbowl.webp', alt: 'Chips', label: 'Chips' },
    { src: 'images/tablesbowl.webp', alt: 'Tables', label: 'Tables' },
  ];

  const CompSlides = [
    <VarietiesFries />,
    <VarietiesChips />,
    <VarietiesTables />,
  ];

  const repeatedSlides = [...slides, ...slides];
  const repeatedCompslides = [...CompSlides, ...CompSlides]; 

  return (
    <div className="allvarietiesmain">
      <Slider {...settings}>
      {repeatedSlides.map((slide, index) => (
        <div key={index}>
          <img
            src={process.env.PUBLIC_URL + slide.src}
            alt={slide.alt}
          />
          <h3>{slide.label}</h3>
        </div>
      ))}
    </Slider>
    <Slider asNavFor={nav2} ref={sliderRef1} arrows={false} fade={true}>
      {repeatedCompslides.map((SlideComponent, index) => (
        <div key={index}>
          {SlideComponent}
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default VarietiesParts;

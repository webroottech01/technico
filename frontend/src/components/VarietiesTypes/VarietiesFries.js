import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './varietiesparts.scss';

const VarietiesFries = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const friesVarieties = [
    {
      name: "Santana",
      image: "/varietiespics/Santana.jpg",
      description: "",
      features: [
        "High Yield",
        "21-22% dry matter",
        "White skin and yellow flesh",
        "More than 95% processible yield",
        "Wider acceptability",
      ],
    },
    {
      name: "K. Frysona",
      image: "/varietiespics/K-Frysona.jpg",
      description: "",
      features: [
        "High yield",
        "22% dry matter",
        "White skin & white flesh",
        "More than 90% Processible yield",
        "Resistant to Late Blight",
      ],
    },
  ];
  

  const sliderSettings = {
    asNavFor: nav1,
    ref: (slider) => (sliderRef2.current = slider),
    slidesToShow: 2,
    swipeToSlide: false,
    swipe: false,
    draggable: false,
    focusOnSelect: true,
    infinite:false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        }
      }

    ]
  };

  const cardSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => (sliderRef1.current = slider),
    infinite: false,
    swipe: false,
    draggable: false,
    centerPadding: "100px",
  };

  return (
    <div className="varietiesparts">
      <div className="fullwidth mx-auto">
        <div className="row">
          <div className="col-md-7 partsnavsec">
            <div className="partsupperpart">
              <p className="hashtext">#1 Most loved</p>
              <h2>
                French Fries <span className="d-green">Varieties</span>
              </h2>
              {/* <button className="playvideobtn"><img src={process.env.PUBLIC_URL + 'images/playvideobtn.png'} alt="" /></button> */}
              
            </div>
            <Slider {...sliderSettings}>
              {friesVarieties.map((variety, index) => (
                <div key={index} className="variety-thumbnail">
                  <img src={process.env.PUBLIC_URL + variety.image} alt={variety.name} />
                  <h3>{variety.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-5">
            <div className="partscards">
              <Slider {...cardSliderSettings}>
                {friesVarieties.map((variety, index) => (
                  <div key={index} className="variety-card">
                    <div className="partscardsname">
                      <h3>{variety.name}</h3>
                      <img
                        src={process.env.PUBLIC_URL + variety.image}
                        alt={variety.name}
                      />
                    </div>
                    <p>{variety.description}</p>
                    <ul className="list2">
                      {variety.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarietiesFries;

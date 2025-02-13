import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './varietiesparts.scss';

const VarietiesChips = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const chipsVarieties = [
    {
    name: "TC-7",
    image: "/varietiespics/TC-7.jpg",
    description: "",
    features: [
      "High yield",
      "Medium crop duration",
      "22-23% dry matter",
      "Yellow flesh",
      "More than 90% processible yield",
      "Suitable for long-term storage; till mid Dec.",
    ],
  },
  {
    name: "TC-77",
    image: "/varietiespics/TC-77.jpg",
    description: "",
    features: [
      "High yield",
      "Resistant to Late Blight",
      "23-24% dry matter",
      "White skin & yellow flesh",
      "More than 95% processible yield",
      "Suitable for mid-term storage; till mid Oct.",
    ],
  },
  {
    name: "TC-3",
    image: "/varietiespics/TC-3.jpg",
    description: "",
    features: [
      "High yield",
      "Uniform tuber size",
      "22% dry matter",
      "White skin & Yellow flesh",
      "More than 95% processible yield",
      "Suitable for mid-term storage; till mid Oct.",
    ],
  },
  {
    name: "TC-10",
    image: "/varietiespics/TC-10.jpg",
    description: "",
    features: [
      "Short Duration",
      "White skin & white flesh",
      "21% dry matter",
      "Uniform tuber size",
      "More than 95% processible yield",
      "Suitable for early processing",
      "Resistant common Scab",
    ],
  },
  {
    name: "Lady Rosetta",
    image: "/varietiespics/Lady-Rosetta.jpg",
    description: "",
    features: [
      "High Yield",
      "Medium crop duration",
      "Red skin & Yellow flesh",
      "21-22% Dry matter",
      "95% processable yield",
      "Storable till Oct.",
    ],
  },
  {
    name: "K. Chipsona-3",
    image: "/varietiespics/K.Chipsona-3.jpg",
    description: "",
    features: [
      "High yield",
      "Medium crop duration",
      "22% dry matter",
      "White skin & white flesh",
      "Suitable for table purposes also",
      "Late blight resistant",
      "Storable till September",
    ],
  },
  {
    name: "K. Chipsona-1",
    image: "/varietiespics/K.Chipsona-1.jpg",
    description: "",
    features: [
      "High yield",
      "21% dry matter",
      "White skin & white flesh",
      "Appropriate for table purposes also",
      "Suitable for early processing",
      "Late blight resistant",
    ],
  },
];
  

  const sliderSettings = {
    asNavFor: nav1,
    ref: (slider) => (sliderRef2.current = slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
  };

  const cardSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => (sliderRef1.current = slider),
    infinite: false,
  };

  return (
    <div className="varietiesparts">
      <div className="fullwidth mx-auto">
        <div className="row">
          <div className="col-md-7 partsnavsec">
            <div className="partsupperpart">
              <p className="hashtext">#1 Most loved</p>
              <h2>
                Chips <span className="d-green">Varieties</span>
              </h2>
              {/* <button className="playvideobtn"><img src={process.env.PUBLIC_URL + 'varietiespics/playvideobtn.png'} alt="" /></button> */}
            </div>
            <Slider {...sliderSettings}>
              {chipsVarieties.map((variety, index) => (
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
                {chipsVarieties.map((variety, index) => (
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

export default VarietiesChips;

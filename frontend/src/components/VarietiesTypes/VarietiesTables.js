import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './varietiesparts.scss';

const VarietiesTables = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const potatoVarieties = [
    {
      name: "Kufri Jyoti",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "Medium yield",
        "Medium duration: 90 days",
        "Wide acceptability",
        "Resilient to climate and disease risks",
      ],
    },
    {
      name: "Kufri Pukhraj",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High Yield",
        "Early bulking; can be harvested after 70 days",
        "Low fertilizer requirement",
        "Suitable for early market segment",
      ],
    },
    {
      name: "Kufri Bahar",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High Yield",
        "Short duration",
        "Good cooking attributes",
      ],
    },
    {
      name: "Desiree",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "Red skinned potato",
        "High yield",
        "Medium duration",
        "Good cooking attributes",
      ],
    },
    {
      name: "T116",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "Red skinned potato",
        "High yield",
        "Medium duration",
        "Long term storage",
        "Good cooking attributes",
      ],
    },
    {
      name: "Kufri Himalini",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High yield",
        "Medium duration",
        "Long term storage",
        "Resistant to late blight",
      ],
    },
    {
      name: "Everest",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High yield",
        "Medium duration",
        "Early bulking",
        "Suitable for early segment",
        "Uniform tuber size",
      ],
    },
    {
      name: "Cardinal",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "Red skinned potato",
        "High Yield",
        "Medium duration",
        "Long term storability",
        "Good cooking attributes",
      ],
    },
    {
      name: "Kuroda",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "Red skinned potato",
        "High yield",
        "Short duration",
        "Suitable for early market segment",
      ],
    },
    {
      name: "Amber Delight",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High yield",
        "Early Bulking",
        "Uniform tubers",
        "Long term storability",
      ],
    },
    {
      name: "Diamant",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High Yield",
        "Medium duration",
        "Suitable for CIPC storage",
        "Good cooking attributes",
      ],
    },
    {
      name: "6034 (Crop- 55)",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "Red skinned potato",
        "High yield",
        "Fast bulking",
        "Long term storage",
        "Good colour retention after storage",
      ],
    },
    {
      name: "Kufri Lauvkar",
      image: "/images/potatos3.png",
      description: "Implement affordable early field generation seed potato programs",
      features: [
        "High yield",
        "Short duration",
        "Long term storage",
        "Good cooking attributes",
        "Preferred for export",
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
                Table <span className="d-green">Varieties</span>
              </h2>
              <button className="playvideobtn">Play Video</button>
            </div>
            <Slider {...sliderSettings}>
              {potatoVarieties.map((variety, index) => (
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
                {potatoVarieties.map((variety, index) => (
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

export default VarietiesTables;

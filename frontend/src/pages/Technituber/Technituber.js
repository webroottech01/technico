import React from 'react';
import PropTypes from 'prop-types';
import './Technituber.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import Reusebanner from '../../components/ReuseBanner/Reusebanner';
import { Helmet } from "react-helmet-async";

const Technituber = () => {


  const sliderImages = [
    { url: '/images/tecnigrp.webp', alt: 'Technituber' },
    { url: '/images/handtuberbig.webp', alt: 'Technituber' },

  ];
  return (
    <>
    <Helmet>
      <title>Revolutionise your current seed production with Technituber</title>
      <meta name="description" content="Our Technituber is invented to revolutionise your seed production and procurement systems, registered with the Department of Biotechnology, Govt. of India." />
    </Helmet>

      <Reusebanner pageTitle="TECHNITUBER® Seed" titleImage="/images/TECHNITUBER.png" sliderImages={sliderImages} />
      <div className="Technituber" data-testid="Technituber">
        <section className="section1 container-fluid mx-auto position-relative">

          <div className="fullwidth mx-auto row align-items-center">
            <div className="col-lg-6 d-flex flex-column">

              <h2 className='d-green'>TECHNITUBER® Seed</h2>
              <p>
                Produced in our state-of-the-art TECHNITUBER® facilities, this product can revolutionise your current seed production and procurement systems.
                <br /><br />
                An approximate size of 13mm and weighing approximately 1.5 grams this product is planted at approximately 100 kg per hectare versus traditional seed weighing up to 4,000 kg per hectare.<br /><br />

                TECHNITUBER® seed offers the perfect opportunity to develop a reduced field generation seed scheme to improve the quality and yield of your final seed product.
                <br /><br />
                The Facility where TECHNITUBER® Seed are produced, is duly registered with the Department of Biotechnology, Ministry of Science and Technology, Govt. of India.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <img
                    src={process.env.PUBLIC_URL + '/images/tuberhand.webp'}
                    className="img-fluid mb-3"
                    alt="Image 10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="aachar container-fluid position-relative justify-content-center">
          <img
            src={process.env.PUBLIC_URL + '/images/TREE-BG.png'}
            className="position-absolute"
            style={{ top: '0%' }}
            alt="Tree Background"
          />
          <div className="fullwidth mx-auto row justify-content-center align-items-center">
            <div className="col-md-5 p-0">
              <img
                src={process.env.PUBLIC_URL + '/images/aachar.png'}
                alt="Aachar"
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-md-7 aachar-container">
              <h2 className="d-green">Special Features</h2>
              <p>-	The TECHNITUBER® seed produces tubers of different sizes ranging from 12-15, 15-18 and 18-20 mm and weighing approximately 1.2-2.0 grams, good enough to plant @ approximately 90-100 kg per Hectare. </p>
              <p>-	The TECHNITUBER® seeds are delivered pre-sprouted in ‘field ready’ conditions and are easily transported. </p>
              <p>-	The high health status of the TECHNITUBER® seed allows for disease quarantine regulations of different countries to be easily met and the compact size avoids the wasted costs incurred in storage and transport of much larger seed pieces.</p>
              <p>-	Technico has also forged strong relationship with Speciality growers, Breeder and Variety owners across the Globe to produce proprietary varieties with large germplasm bank ({'>'} 250 varieties).</p>
              <h2> Certification</h2>
              <p>-	Technico Seed is Certified by the CPRI, India; National Seed Certification Agency in respective countries and the quality of seed is also tested at Agdia Inc. testing lab USA. </p>
            </div>
          </div>
        </section>

        <section className="section3 container-fluid position-relative mx-auto">
          <div className="fullwidth mx-auto row align-items-center justify-content-center">
            <div className="col-md-6">

              <h2 className="d-green">Grow Your Own Seed Cost</h2>

            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + '/images/graphtechnico.jpg'}
                style={{ width: '100%' }}
                alt="Blank"
              />
            </div>
          </div>
        </section>

        <section className="container-fluid position-relative section-middle">
          <img
            src={process.env.PUBLIC_URL + '/images/tree-bg-2.png'}
            className="position-absolute"
            style={{ right: '0%' }}
            alt="Tree Background 2"
          />
          <div className="fullwidth mx-auto row align-items-center">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + '/images/globecounty.png'}
                style={{ width: '100%' }}
                alt="Blank"
              />
            </div>
            <div className="col-md-6 ps-4">

              <h2 className="d-green">Catering to Global Markets</h2>
              <p>Over the years, Technico has been supplying TECHNITUBER® Seeds across the Globe to Processing Industry Players viz., Russia, Republic of South Africa, Egypt, Saudi Arabia, Turkey, Senegal, Algeria, Pakistan etc.,</p>
            </div>

          </div>
        </section>

        <KeyFeatures />
      </div>
    </>
  )
};

Technituber.propTypes = {};

Technituber.defaultProps = {};

export default Technituber;

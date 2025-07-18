import React from 'react';
import PropTypes from 'prop-types';
import './Technituber.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import Reusebanner from '../../components/ReuseBanner/Reusebanner';
import { Helmet } from "react-helmet-async";
import BannerTicker from '../../components/bannerticker/bannerticker';

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

      <Reusebanner pageTitle="TECHNITUBER® Seed" titleImage="/images/technitubernewbanner.png" sliderImages={sliderImages} />
      <div className="Technituber" data-testid="Technituber">
        <section className="section1 container-fluid mx-auto position-relative">

          <div className="fullwidth mx-auto row align-items-center">
            <div className="col-lg-6 d-flex flex-column">

              <h2 className='d-green'>TECHNITUBER® Seed</h2>
              <p>
                Produced in our state-of-the-art TECHNITUBER® facilities, this product can revolutionise your current seed production and procurement systems.
                <br /><br />
                An approximate size of 13 mm and weighing approximately 1.5 grams this product is planted at approximately 100 kg per hectare versus traditional seed weighing up to 4,000 kg per hectare.<br /><br />

                TECHNITUBER® seed offers the perfect opportunity to develop a reduced field generation seed scheme to improve the quality and yield of your final seed product.
                <br /><br />
                The Facility where TECHNITUBER® Seed are produced, is duly registered with the Department of Biotechnology, Ministry of Science and Technology, Govt. of India.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <img
                    src={process.env.PUBLIC_URL + '/images/technituberryttech.webp'}
                    className="img-fluid"
                    alt="Image 10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
<BannerTicker />
        <section className="aachar container-fluid position-relative justify-content-center">
          
          <div className="fullwidth mx-auto row justify-content-center align-items-center">
            
            <div className="col-md-6 aachar-container">
              <h2 className="d-green">Special Features</h2>
              <p>-	The TECHNITUBER® seed produces tubers of different sizes ranging from 12-15, 15-18 and 18-20 mm and weighing approximately 1.2-2.0 grams, good enough to plant @ approximately 90-100 kg per Hectare. </p>
              <p>-	The TECHNITUBER® seeds are delivered pre-sprouted in ‘field ready’ conditions and are easily transported. </p>
              <p>-	The high health status of the TECHNITUBER® seed allows for disease quarantine regulations of different countries to be easily met and the compact size avoids the wasted costs incurred in storage and transport of much larger seed pieces.</p>
              <p>-	Technico has also forged strong relationship with Speciality growers, Breeder and Variety owners across the Globe to produce proprietary varieties with large germplasm bank ({'>'} 350 varieties).</p>
              <div className='d-flex align-items-start certification'>
                <img src={process.env.PUBLIC_URL + '/images/certifiedimg.webp'}
            alt="certification" />
              <div>
              <h3> Certification</h3>
              <p>-	Technico Seed is Certified by the Central Potato Research Institute (CPRI), India; National Seed Certification Agency in respective countries and the quality of seed is also tested at Agdia Inc. testing lab USA. </p>
            </div>
            </div>
            </div>
            <div className="col-md-6 p-0">
              <img
                src={process.env.PUBLIC_URL + '/images/technituberseedryt.webp'}
                alt="Aachar"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </section>
<BannerTicker />
        <section className="section3 container-fluid position-relative mx-auto">
          <div className="fullwidth mx-auto row align-items-center justify-content-center">
            <div className="col-md-6">

              <h2 className="d-green">Grow Your Own Seed @Affordable Cost</h2>

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
              <p>Over the years, Technico has been supplying TECHNITUBER® Seeds across the Globe to Processing Industry Players, seed growers viz., Russia, Egypt, Saudi Arabia, Turkey, Senegal, Nepal, Pakistan etc.,</p>
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

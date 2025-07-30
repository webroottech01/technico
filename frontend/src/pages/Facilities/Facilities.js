import React from 'react';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import './Facilities.scss';
import Reusebanner from '../../components/ReuseBanner/Reusebanner';
import { Helmet } from 'react-helmet-async';
import BannerTicker from '../../components/bannerticker/bannerticker';
const Facilities = () => {

  const sliderImages = [
    { url: '/images/facility.webp', alt: 'Business New' },
    { url: '/images/facilit1.webp', alt: 'Business More' },
    { url: '/images/facility2.webp', alt: 'Extra Image' },
  ];


  return (
    <>
      <Helmet>
        <title>TECHNITUBER® | Technology | Manpura | Raipur Rani Facility</title>
        <meta name="description" content="Discover our cutting-edge research and development facilities, equipped with modern technology to support our agricultural biotechnology initiatives." />
      </Helmet>
      <Reusebanner pageTitle="Facilities" titleImage="/images/facilitiesnewbanner.png" sliderImages={sliderImages} />
      <div className="Facilities" data-testid="Facilities">

        <section className="section1 container-fluid mx-auto position-relative my-0 px-0">
        <div className="fullwidth mx-auto row align-items-center">
          <div className="col-lg-6">
          
            <h2 className="d-green col-12">TECHNITUBER® Technology</h2>
            <div className="col-lg-12 d-flex flex-column ">



              <p>TECHNITUBER® Technology is a cutting-edge process developed by Technico Agri Sciences for producing large volumes of miniature, virus-free seed potatoes. This process begins with pathogen-free nuclear materials and utilizes protected production environments to ensure the highest quality and productivity year-round. The advanced technology allows Technico to produce commercial-grade seed in just 2-3 field generations, significantly faster than traditional methods, which can take 5-7 generations.</p>

              <p>By achieving up to 15 times the productivity of conventional minituber production methods, TECHNITUBER® technology enables the company to deliver competitively priced seeds 3-4 generations earlier, thus providing a substantial economic advantage. This process helps farmers and commercial partners achieve higher efficiency, faster turnaround, and improved crop yields, driving innovation in the seed potato industry.</p></div>

          </div>
          <div className="col-lg-6 p-0">
            <video width="100%" controls autoPlay>
              <source src={process.env.PUBLIC_URL + '/videos/facilityvideo.mp4'} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          </div>
        </section>

        <BannerTicker />


        <section className="section3 container-fluid position-relative mx-auto px-0">


          <div className="fullwidth mx-auto row align-items-center">
            <div className="col-lg-6">
              <h2 className="d-green">our facility</h2>
              <p>Technico is equipped with state-of-the-art facilities including DBT-certified tissue culture laboratories, precision-controlled growth chambers - all built for high biosecurity, scalability, and sustainable operations to deliver high-quality, disease-free TECHNITUBER® . <br />
                We leverage advanced micropropagation systems to ensure a year-round, scalable supply of early-generation Technituber®, meeting the demands of both domestic and international markets. Each stage of production is backed by full traceability, rigorous quality assurance, and strict regulatory compliance.
              </p>
              <div className='d-flex'>
                <img
                  src={process.env.PUBLIC_URL + '/images/locationgricon.png'}
                  style={{ width: '100%' }}
                  alt="Blank"
                  className='locationicon'
                />
                <h2 className="d-green">Manpura Facility</h2>
              </div>
              
              <ul>
                <li>
                  Spread across 10 acres of fully integrated Agri-biotech infrastructure
                </li>
                <li>
                  Annual production capacity of over 40 million Technituber®.
                </li>
                <li>
                  Equipped with 37 advanced greenhouses.
                </li>
                <li>
                  We maintain diverse germplasm bank comprising over 350 varieties across different segments.
                </li>
              </ul>
              <div className='d-flex'>
                <img
                  src={process.env.PUBLIC_URL + '/images/locationgricon.png'}
                  style={{ width: '100%' }}
                  alt="Blank"
                  className='locationicon'
                />
                <h2 className="d-green">RaipurRani Facility</h2>
              </div>

              <ul>
                <li>
                  Spread across 15 acres of fully integrated Agri-biotech infrastructure

                </li>
                <li>
                  Annual production capacity of over 60 million Technituber®.

                </li>
                <li>
                  Equipped with 20 advanced greenhouses with 18 additional units under development.

                </li>
                <li>
                  We maintain diverse germplasm bank comprising over 350 varieties across different segments.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="mx-auto row mt-5 ">
                <div className="col-lg-6 manapurafac">
                  <img src={process.env.PUBLIC_URL + '/images/manapurafac.webp'} />

                </div>
                <div className="col-md-6">
                  <img src={process.env.PUBLIC_URL + '/images/raipurranifac.webp'} />

                </div>
              </div>


            </div>
          </div>

        </section>



        <KeyFeatures />


      </div>
    </>
  )
};


export default Facilities;

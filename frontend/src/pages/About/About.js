import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
// import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import './About.scss';
import Sidesticks from '../../components/Sidesticks/Sidesticks';
import { Helmet } from "react-helmet-async";
import BannerTicker from '../../components/bannerticker/bannerticker';

const countryData = [
  
  { 
    name: "India", 
    description: "Technico operates two TECHNITUBER® seed production facilities in India: Manpura (Himachal Pradesh) and Raipur Rani (Haryana). The Corporate Office for Business Development, Marketing, Sales, and Administration is based in Chandigarh (Union Territory)." 
  },
  { 
    name: "China", 
    description: "Technico's third TECHNITUBER® production facility is located in Yanglin, Yunnan Province, with the Business Development and Sales Office in Kunming City, Yunnan." 
  },
  { 
    name: "Australia", 
    description: "The Corporate Headquarters oversees Strategic Business Development, Financial Management, and Global Operations for the Technico Group." 
  },
  
];

const About = () => {
  const sections = [
    { id: 'whoweare', label: 'Who are we?', icon: '/images/about1.png' },
    { id: 'makeDifferent', label: 'What Makes Us Different?', icon: '/images/makeDifferent.png' }, 
    { id: 'presence', label: 'Global Presence', icon: '/images/about2.png' },
    { id: 'team', label: 'Meet Our Team', icon: '/images/about3.png' },
  ]; 

  const [showDetailsOnce, setShowDetailsOnce] = useState(false);
  const managementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDetailsOnce(true);
          setTimeout(() => {
            setShowDetailsOnce(false);
          }, 5000);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.1 }
    );

    if (managementRef.current) {
      observer.observe(managementRef.current);
    }

    return () => {
      if (managementRef.current) observer.unobserve(managementRef.current);
    };
  }, []);

  return (
    <>
      <Helmet>
      <title>About Technico Agri Sciences Limited - Our Mission & Vision</title>
      <meta name="description" content="Learn about Technico's mission to revolutionize agriculture through cutting-edge biotechnology, our vision for the future, and our commitment to sustainability." />
    </Helmet>
  <Sidesticks sections={sections} />
  <AboutBanner pageTitle="About Us" titleImage="/images/aboutbannernew.png"/>
  
  <div className="About" data-testid="About">

    <section className="about-welcome container-fluid mx-auto position-relative" id="whoweare">
      
      <div className="fullwidth mx-auto row">
        <div className="col-lg-6 p-0 d-flex flex-column">
          
          <h2 className="d-green">Who are We ?</h2>
          <p>
          <b>Technico Agri Sciences Limited</b>, a subsidiary of <b>ITC Limited</b>, is a pioneer in advanced seed potato production. Using our proprietary <b>TECHNITUBER® Technology</b>, we deliver virus-free, high-yielding, disease free seed potatoes that boost farmer income and productivity.
          <br /><br />
We offer end-to-end solutions in the seed potato value chain - driving sustainability, rapid multiplication and climate smart farming innovation, helping grow responsible food.

          </p>

        </div>
      </div>
      {/* <div className="about-green-box">
        <h2 className="text-light m-0">Cultivating Seed Potatoes Excellence Since 1999</h2>
      </div> */}
    </section>
{/* makes Different */}
<div className="makeDifferentMain" style={{ userSelect: 'none' }} id="makeDifferent">
        <div className="makesDifferentSection" style={{ userSelect: 'none' }}>
          <div className="makesDifferentInner" style={{ userSelect: 'none' }}>

            <h2>
              What makes us <br />
              <span>Different?</span>
            </h2>

          </div>
          <p>We combine cutting-edge agri-technology with a deep-rooted commitment to quality, sustainability, and innovation—empowering farmers with reliable, high-performance seed solutions.</p>
        </div>

        <div className="d-flex serviceBoxMain">
          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/innovative.png'}
              alt=""
            />
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/innovative-black.png'}
              alt=""
            />
            <h3>Sustainable Farming</h3>
            <p>
            Practices reduce pesticide use, save water, and preserve soil health.
            </p>
          </div>

          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/Plug.png'}
              alt=""
            />
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/Plug-black.png'}
              alt=""
            />
            <h3>Focused R&D</h3>
            <p>
            Develops high-yielding, climate-resilient, and disease-tolerant varieties.
            </p>
          </div>
          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/r&d.png'}
              alt=""
            />
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/r&d-black.png'}
              alt=""
            />
            <h3>Cost-Effective Quality</h3>
            <p>
            Seeds that are virus-free, high performing, and affordable for all farmers.
            </p>
          </div>


          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/sustainfarm.png'}
              alt=""
            />
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/sustainfarm-black.png'}
              alt=""
            />
            <h3>Advanced Production Facilities</h3>
            <p>
            Ensure consistent, year-round supply of disease-free, pure seed potatoes.
            </p>
          </div>

          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/high-quality.png'}
              alt=""
            />
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/high-quality-black.png'}
              alt=""
            />
            <h3>TECHNITUBER® Technology</h3>
            <p>
            Enables rapid multiplication and faster delivery of new potato varieties.
            </p>
          </div>





          {/* <div className="serviceBox" style={{ userSelect: 'none' }}>
        <img
          className="img-normal"
          src={process.env.PUBLIC_URL + '/images/precision.png'}
          alt=""
        />
        <img 
          className="img-normal"
          src={process.env.PUBLIC_URL + '/images/precision-black.png'}
          alt=""
        />
        <h3>Precision Farming </h3>
        <p>
          Through continuous R&amp;D, the company aims at developing new, more
          efficient ways to multiply seed potatoes with high yielding disease
          resistant and robust varieties in different segments. This commitment
          to innovation enables Technico to stay at the forefront of the Potato
          industry and meet the evolving needs of farmers and food producers
          globally.
        </p>
      </div> */}
        </div>
      </div>
    <BannerTicker />

    <section className="fullwidth mx-auto globalpresence" id="presence">
      <h2 className="d-green">Global Presence</h2>
      <img src={process.env.PUBLIC_URL + '/images/Isolation_Mode.webp'} alt="Global Presence" className='mx-auto d-block'/>
    </section>

    <section className="fullwidth mx-auto d-flex flex-column gap-5 presencecountry">
    <h2 className="d-green"><img src={process.env.PUBLIC_URL + '/images/pintechynew.png'} /> Our Offices</h2>
      {countryData.map((country, index) => (
        <div className="country-container d-flex flex-row" key={index}>
          <img 
            src={`${process.env.PUBLIC_URL}/images/${country.name}.png`} 
            alt={country.name} 
          />
          <div className="d-flex flex-column gap-2">
            <h2 className="d-green m-0 fw-semibold">{country.name}</h2>
            <p className="m-0">{country.description}</p>
          </div>
        </div>
      ))}
      <div className="country-container d-flex flex-row ouroperationslast">
          <img 
            src={process.env.PUBLIC_URL + '/images/flagtechy.png'}
            alt="our operations"
          />
          <div className="d-flex flex-column gap-2">
            <h2 className="d-green m-0 fw-semibold">our operations</h2>
            <p className="m-0">Technico has established a strong international footprint, operating in key agricultural markets across Egypt, Saudi Arabia, Russia, Turkey, Senegal, Nepal, Pakistan, and more.</p>
          </div>
        </div>
      
    </section> 

    {/* <div className='ouroperations fullwidth mx-auto' >
    <h2 className="d-green"><img src={process.env.PUBLIC_URL + '/images/flagtechy.png'} /> our operations</h2> 
      <p>Technico has established a strong international footprint, operating in key agricultural markets across Egypt, Saudi Arabia, Russia, Turkey, Senegal, Nepal, Pakistan, and more.</p>
    </div> */}
    <BannerTicker />

    <section className="management fullwidth  mx-auto text-center row" id="team">
    <h2 className="d-green mb-4 col-12">meet our management team</h2>
    <div className="row pt-5 col-md-7 managmentsec">
        <div className="col-lg-12 text-center d-flex flex-column justify-content-center">
            <h2 className="d-green mb-0">board of directors</h2>    
            <div className="position-relative col-md-4 col-sm-6 col-12 mt-5 mx-auto">
            <img src={process.env.PUBLIC_URL + '/images/sshivkumar.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4>S. Sivakumar</h4>
                <p>Chairman and Non-Executive Director</p>
            </div>
        </div>
        </div>
        
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/ashok.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4>Ashok Dharmarajan </h4>
                <p>Non-Executive Director</p>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/ganesh-kumar.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4> Ganesh K Sundararaman </h4>
                <p>Non-Executive Director</p>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/kavita-chaturvedi.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4>Kavita Chaturvedi </h4>
                <p> Non-Executive Director</p>
            </div>
        </div>
    </div>
    <div className="row pt-5 justify-content-center col-md-5 executivesec">
        <div className="text-start d-flex flex-column justify-content-center p-0">
            <h2 className="d-green mb-0">Executive <br />Management Committee</h2>
        </div>
        <div className="position-relative col-md-12 mt-5 justify-content-center row">
        <div className="position-relative col-md-4 col-sm-6 col-12">
            <img src={process.env.PUBLIC_URL + '/images/NripendraJha.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4>Nripendra Kumar Jha </h4>
                <p>Chairman and Chief Executive Officer</p>
            </div>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/SurendraPalSingh.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4>S.P Singh</h4>
                <p>Member and Vice President Supply Chain</p>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/sanjeevmadannv.png'} alt="Management Member" />
            <div className={`management-details ${showDetailsOnce ? 'show-once' : ''}`}>
                <h4>Sanjeev Madan </h4>
                <p>Member and Chief Financial Officer</p>
            </div>
        </div>
    </div>
</section>




  </div>
  </>
  );
};

export default About;

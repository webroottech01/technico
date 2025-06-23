import React from 'react';
import PropTypes from 'prop-types';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import './About.scss';
import Sidesticks from '../../components/Sidesticks/Sidesticks';
import { Helmet } from "react-helmet-async";

const countryData = [
  
  { 
    name: "India", 
    description: "Technico Agri Sciences Limited is located in India. The company operates TECHNITUBER® seed production facilities in Manpura, Himachal Pradesh and Raipur Rani, Haryana. Additionally, its Business Development, Marketing, Sales, and Administration office is situated in Chandigarh City, Union Territory. Technico offers a range of products, including Tissue Culture, TECHNITUBER® seed potatoes and Field Generation seed potatoes, ensuring the supply of high-quality, disease-free seed potatoes for farmers." 
  },
  { 
    name: "China", 
    description: "TECHNITUBER® seed production facility located in Yanglin, Yunnan Province. Technico Business Development, Marketing, Sales and Administration office located in Kunming City, Yunnan Province.Products:- Tissue Culture, TECHNITUBER® seed potatoes." 
  },
  { 
    name: "Australia", 
    description: "The corporate office is responsible for the Group's Strategic Business Development Initiatives, Financial Management and overall Global Operations Monitoring." 
  },
];

const About = () => {
  const sections = [
    { id: 'whoweare', label: 'Who are we?', icon: '/images/about1.png' }, 
    { id: 'presence', label: 'Global Presence', icon: '/images/about2.png' },
    { id: 'team', label: 'Meet Our Team', icon: '/images/about3.png' },
  ]; 


  return(
  
  <>
      <Helmet>
      <title>About Technico Agri Sciences Limited - Our Mission & Vision</title>
      <meta name="description" content="Learn about Technico's mission to revolutionize agriculture through cutting-edge biotechnology, our vision for the future, and our commitment to sustainability." />
    </Helmet>
  <Sidesticks sections={sections} />
  <AboutBanner pageTitle="About Us" titleImage="/images/about-logo.png"/>
  
  <div className="About" data-testid="About">

    <section className="about-welcome container-fluid mx-auto position-relative" id="whoweare">
      
      <div className="fullwidth mx-auto row">
        <div className="col-lg-6 p-0 d-flex flex-column">
          
          <h2 className="d-green">Who are We ?</h2>
          <p>
            
Technico Agri Sciences Limited (Technico), a wholly owned subsidiary of ITC Limited (ITC), began its journey in 1999 with a vision to transform Potato through innovation and expertise. With its proprietory TECHNITUBER® Technology, Technico has redefined Potato Value Chain by delivering high yielding superior quality seed potatoes to the farmers thereby enhancing their income.
<br /> 
<br />
Rooted in trust and driven by a commitment to deliver superior quality seed potatoes, Technico continues to lead the way in providing sustainable farming solutions, fostering growth and innovation across farming community in India and beyond.
<br />
<br />
With a steadfast commitment to innovation and sustainability, Technico continues to support its parent company - ITC’s vision of strengthening farm-to-fork value chains and advancing the future of agriculture.
<br />
<br />
Through its advanced TECHNITUBER® Technology, the Company accelerates seed multiplication, cutting the process by 3-4 years in comparison with traditional methods. This technology ensures superior seed quality, reduces pathogen exposure, and facilitates rapid introduction of new varieties. 
<br />
<br />
We deliver end-to-end supply chain solutions for the production of high-quality early-
generation seed potatoes, supporting sustainable economic growth within the global potato
value chain. By utilizing TECHNITUBER® Technology and advancing climate-smart
agricultural practices, we ensure the production of premium seed potatoes in an
environmentally responsible manner.

          </p>

        </div>
      </div>
      <div className="about-green-box">
        <h2 className="text-light m-0">Cultivating Seed Potatoes Excellence Since 1999</h2>
      </div>
    </section>
{/* makes Different */}
<div className="makeDifferentMain" style={{ userSelect: 'none' }}>
        <div className="makesDifferentSection" style={{ userSelect: 'none' }}>
          <div className="makesDifferentInner" style={{ userSelect: 'none' }}>

            <h2>
              What makes us <br />
              <span>Different?</span>
            </h2>

          </div>
        </div>

        <div className="d-flex serviceBoxMain">
          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/innovative.png'}
              alt=""
            />
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/innovative-black.png'}
              alt=""
            />
            <h3>Innovative Technology</h3>
            <p>
              We leverage award winning TECHNITUBER® Technology for accelerating production of new varieties making them available to the market in a less time frame at cost-competitive price.
            </p>
          </div>

          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/Plug.png'}
              alt=""
            />
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/Plug-black.png'}
              alt=""
            />
            <h3>State of the Art Facilities</h3>
            <p>
              Our state of the art facilities enable efficient, year-round production while maintaining the purity and productivity of our TECHNITUBER® seed (pre basic seed), setting us apart in the industry.
            </p>
          </div>
          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/r&d.png'}
              alt=""
            />
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/r&d-black.png'}
              alt=""
            />
            <h3>R&D</h3>
            <p>
              Through our continuous R&D programme, the Company keeps on developing new high yielding, disease resistant and climate resilient varieties in all potato segments. This enables Technico to stay at the forefront to meet the evolving needs of farmers and Potato industry globally.
            </p>
          </div>


          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/sustainfarm.png'}
              alt=""
            />
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/sustainfarm-black.png'}
              alt=""
            />
            <h3>Sustainable Farming</h3>
            <p>
              The company ensures efficient use of resources, reduces the environmental footprint in seed potato production, and promoting long-term sustainability through soil health conservation, minimizing pesticide use, and optimizing water usage, thereby, supporting resilient and eco-friendly Agri practices for future generations.
            </p>
          </div>

          <div className="serviceBox" style={{ userSelect: 'none' }}>
            <img
              className="img-hover"
              src={process.env.PUBLIC_URL + '/images/high-quality.png'}
              alt=""
            />
            <img
              className="img-normal"
              src={process.env.PUBLIC_URL + '/images/high-quality-black.png'}
              alt=""
            />
            <h3>High Quality Low Cost Seed</h3>
            <p>
              We ensure production of superior quality, virus-free, high-yielding, early-generation seed potatoes at affordable cost making it available even to the smallest farmers.
            </p>
          </div>





          {/* <div className="serviceBox" style={{ userSelect: 'none' }}>
        <img
          className="img-hover"
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
    

    <section className="fullwidth mx-auto globalpresence" id="presence">
      <h2 className="d-green">Global Presence</h2>
      <img src={process.env.PUBLIC_URL + '/images/world-full.png'} style={{ width: '100%' }} alt="Global Presence" />
    </section>

    <section className="fullwidth mx-auto d-flex flex-column gap-5 presencecountry">
    <h2 className="d-green"><img src={process.env.PUBLIC_URL + '/images/pintechy.png'} /> Our Offices</h2>
      {countryData.map((country, index) => (
        <div className="country-container d-flex flex-row gap-2" key={index}>
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
      
      
    </section> 
    <div className='ouroperations fullwidth mx-auto' >
    <h2 className="d-green"><img src={process.env.PUBLIC_URL + '/images/flagtechy.png'} /> our operations</h2> 
      <h6>Egypt, Saudi Arabia, Russia, Turkey, Senegal, Nepal, Pakistan etc.</h6>
    </div>

    <section className="management container-xl mx-auto text-center" id="team">
    <h2 className="d-green mb-4">meet our management team</h2>
    <div className="row pt-5">
        <div className="col-lg-12 text-center d-flex flex-column justify-content-center">
            <h2 className="d-green mb-0">board of directors</h2>    
            <div className="position-relative col-md-4 col-sm-6 col-12 mt-5 mx-auto">
            <img src={process.env.PUBLIC_URL + '/images/sshivkumar.png'} alt="Management Member" />
            <div className="management-details">
                <h4>S. Sivakumar</h4>
                <p>Chairman and Non-Executive Director</p>
            </div>
        </div>
        </div>
        
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/ashok.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Ashok Dharmarajan </h4>
                <p>Non-Executive Director</p>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/ganesh-kumar.png'} alt="Management Member" />
            <div className="management-details">
                <h4> Ganesh K Sundararaman </h4>
                <p>Non-Executive Director</p>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/kavita-chaturvedi.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Kavita Chaturvedi </h4>
                <p> Non-Executive Director</p>
            </div>
        </div>
    </div>
    <div className="row pt-5 mt-5 justify-content-center">
        <div className="col-lg-9 text-start d-flex flex-column justify-content-center ms-5 p-0">
            <h2 className="d-green mb-0">Executive <br />Management Committee</h2>
        </div>
        <div className="position-relative col-md-12 mt-5 justify-content-center row">
        <div className="position-relative col-md-4 col-sm-6 col-12">
            <img src={process.env.PUBLIC_URL + '/images/NripendraJha.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Nripendra Kumar Jha </h4>
                <p>Chairman and Chief Executive Officer</p>
            </div>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/SurendraPalSingh.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Surendra Pal Singh</h4>
                <p>Member and Vice President Supply Chain</p>
            </div>
        </div>
        <div className="position-relative col-md-4 col-sm-6 col-12 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/sanjeevmadannv.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Sanjeev Madan </h4>
                <p>Member and Chief Financial Officer</p>
            </div>
        </div>
    </div>
</section>




  </div>
  </>
)};

About.propTypes = {};
About.defaultProps = {};

export default About;

import React from 'react';
import PropTypes from 'prop-types';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import './About.scss';
import Sidesticks from '../../components/Sidesticks/Sidesticks';


const countryData = [
  
  { 
    name: "India", 
    description: "Technico Pty Ltd. has a fellow subsidiary, Technico Agri Sciences Limited located in India. It’s TECHNITUBER® seed production facility located in Manpura, Himachal Pradesh.Business Development, Marketing, Sales and Administration office located in Chandigarh City, Union Territory.Products:- Tissue Culture, TECHNITUBER® seed potatoes, Field Generation One -> Field Generation seed potatoes." 
  },
  { 
    name: "China", 
    description: "TECHNITUBER® seed production facility located in Yanglin, Yunnan Province. Technico Business Development, Marketing, Sales and Administration office located in Kunming City, Yunnan Province.Products:- Tissue Culture, TECHNITUBER® seed potatoes.y" 
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
  <Sidesticks sections={sections} />
  <AboutBanner pageTitle="About Us" titleImage="images/about-logo.png"/>
  
  <div className="About" data-testid="About">

    <section className="about-welcome container-fluid mx-auto position-relative" id="whoweare">
      
      <div className="fullwidth mx-auto row">
        <div className="col-lg-6 p-0 d-flex flex-column">
          
          <h1 className="d-green">Who are We ?</h1>
          <p>
            
Technico Agri Sciences Limited (Technico), a wholly owned subsidiary of ITC Limited (ITC), began its journey in 1999 with a vision to transform agriculture through innovation and expertise. With its patented TECHNITUBER® Technology, Technico has redefined potato production by delivering high yielding superior quality seed potatoes to the farmers thereby enhancing their income.
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
We provide complete supply chain solutions for production of high-quality early-generation seed potatoes by fostering sustainable economic development in the global potato value chain utilising TECHNITUBER® Technology and advancing climate-smart agricultural practices 

          </p>

        </div>
      </div>
      <div className="about-green-box">
        <h1 className="text-light m-0">Cultivating Potato Excellence Since 1999</h1>
      </div>
    </section>

    

    <section className="fullwidth mx-auto globalpresence" id="presence">
      <h1 className="d-green" style={{ fontSize: '45px' }}>Global Presence</h1>
      <img src={process.env.PUBLIC_URL + '/images/world-full.png'} style={{ width: '100%' }} alt="Global Presence" />
    </section>

    <section className="fullwidth mx-auto d-flex flex-column gap-5 presencecountry">
    <h1 className="d-green" style={{ fontSize: '45px' }}><img src={process.env.PUBLIC_URL + '/images/pintechy.png'} /> Our Offices</h1>
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
    <h1 className="d-green" style={{ fontSize: '45px' }}><img src={process.env.PUBLIC_URL + '/images/flagtechy.png'} /> our operations</h1>
      <h6>Russia, Republic of South Africa, Egypt, Saudi Arabia, Turkey, Senegal, Algeria, Pakistan etc.</h6>
    </div>

    <section className="management container-xl mx-auto text-center" id="team">
    <h1 className="d-green mb-4">meet our management team</h1>
    <div className="row pt-5">
        <div className="col-lg-12 text-center d-flex flex-column justify-content-center">
            <h1 className="d-green mb-0">board of directors</h1>    
            <div className="position-relative col-md-4 mt-5 mx-auto">
            <img src={process.env.PUBLIC_URL + '/images/sshivkumar.png'} alt="Management Member" />
            <div className="management-details">
                <h4>S. Sivakumar</h4>
                <p>Chairman and Non-Executive Director</p>
            </div>
        </div>
        </div>
        
        <div className="position-relative col-md-4 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/ashok.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Ashok Dharmarajan </h4>
                <p>Non-Executive Director</p>
            </div>
        </div>
        <div className="position-relative col-md-4 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/ganesh-kumar.png'} alt="Management Member" />
            <div className="management-details">
                <h4> Ganesh K Sundararaman </h4>
                <p>Non-Executive Director</p>
            </div>
        </div>
        <div className="position-relative col-md-4 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/kavita-chaturvedi.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Kavita Chaturvedi </h4>
                <p> Non-Executive Director</p>
            </div>
        </div>
    </div>
    <div className="row pt-5 mt-5 justify-content-center">
        <div className="col-lg-9 text-start d-flex flex-column justify-content-center ms-5 p-0">
            <h1 className="d-green mb-0">Executive <br />Management Committee</h1>
        </div>
        <div className="position-relative col-md-12 mt-5 justify-content-center row">
        <div className="position-relative col-md-4">
            <img src={process.env.PUBLIC_URL + '/images/NripendraJha.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Nripendra Kumar Jha </h4>
                <p>Chairman and Chief Executive Officer</p>
            </div>
            </div>
        </div>
        <div className="position-relative col-md-4 mt-5">
            <img src={process.env.PUBLIC_URL + '/images/SurendraPalSingh.png'} alt="Management Member" />
            <div className="management-details">
                <h4>Surendra Pal Singh</h4>
                <p>Member and Vice President Supply Chain</p>
            </div>
        </div>
        <div className="position-relative col-md-4 mt-5">
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

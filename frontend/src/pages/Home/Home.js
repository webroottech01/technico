import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import BannerTicker from '../../components/bannerticker/bannerticker';
import { Link } from 'react-router';
import { Helmet } from "react-helmet-async";
import VideoPlayer from '../../components/videoplayer/videoplayer';
// import HomeBanner from '../../components/homebanner/homebanner';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => (
  
  <>
    <Helmet>
      <title>Technico Agri Sciences Ltd. - Innovative Agricultural Solutions</title>
      <meta name="description" content="Discover Technico Agri Sciences Limited, a leader in agricultural biotechnology, offering innovative solutions for enhanced crop production and quality." />
    </Helmet>

    <div className="Home" data-testid="Home">
      {/* <HomeBanner /> */}
      {/* HOME HEADER */}
      <div className="homeMainBanner" style={{ userSelect: 'none' }}>
        <div className="homeLogo text-center" style={{ userSelect: 'none' }}>
          <div className="logoImage">
            <img src={process.env.PUBLIC_URL + '/images/homeLogo.png'} alt="" />
          </div>
        </div>

        <div className="homeNavMain d-flex justify-content-between align-items-center" style={{ userSelect: 'none' }}>
          <div className="homeleftMenu" style={{ userSelect: 'none' }}>
            <div className="text-center lefttext aboutMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/aboutbannernew.png'} alt="" />
              <Link to="/about-us">About Us</Link>
            </div>
            <div className="text-center facilitiesMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/facilitiesnewbanner.png'} alt="" />
              <Link to="/facilities">Facilities</Link>


            </div>
            <div className="text-center lefttext testimonialsMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/varietiesnewbanner.png'} alt="" />
              <Link to="/varieties">Varieties</Link>


            </div>
          </div>
          <div className="homeCenterMenu">
            <img src={process.env.PUBLIC_URL + '/images/menu-center33.png'} alt="" />
          </div>
          <div className="homerightMenu" style={{ userSelect: 'none' }}>
            <div className="text-center righttext varietiesMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/ourbusinessnewbanner.png'} alt="" />
              <Link to="/our-business">Our Businesses</Link>

            </div>
            <div className="text-center technituberMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/technitubernewbanner.png'} alt="" />
              <Link to="/technituber"> Technituber®</Link>
            </div>
            <div className="text-center righttext businessMenu" style={{ userSelect: 'none' }}>
              <img src={process.env.PUBLIC_URL + '/images/testimonialsnewbanner.png'} alt="" />
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>
          <div className="col-12 homebannertagline">
          Pioneering Seed Potato Technology
        </div>
          {/* <div className='col-12 homebannertagline'>Pioneering Seed Potato Technology</div> */}
        </div>
      </div>

      {/* HOME HEADER ENDS */}
      <BannerTicker />
      {/* FIRST SECTION */}
      <div className="homeAbout" style={{ userSelect: 'none' }}>
        {/* <img src={process.env.PUBLIC_URL + '/images/testimonialsnewbanner.png'} /> */}
        <VideoPlayer
      thumbnail={process.env.PUBLIC_URL + '/images/videobanner.webp'}
      videoUrl={process.env.PUBLIC_URL + '/videos/Technico_Corporate_Video.mp4'}
    />
      {/* <h2 className='homeabouttitle'>We Support the World to produce Responsible Food</h2>
        <div className="row">
        
          <div className="col-md-7 homeStory" style={{ userSelect: 'none' }}>
          
            <h2>Our Story</h2>
            <h3>With you Since 1999</h3>
            <p className="bigText">
              Technico Agri Sciences Limited (Technico), a wholly owned subsidiary of ITC Limited (ITC), began its journey in 1999 with a vision to transform agriculture through innovation and expertise. With its proprietory TECHNITUBER® Technology, Technico has redefined potato value chain by delivering high yielding superior quality seed potatoes to the farmers thereby enhancing their income.


            </p>
            <div className="shortText" style={{ userSelect: 'none' }}>


            </div>
            <p className="bigText">
              Rooted in trust and driven by a commitment to deliver superior quality seed potatoes, Technico continues to lead the way in providing sustainable farming solutions, fostering growth and innovation across Potato farming community in India and beyond.
            </p>

            <Link to="/about-us">Learn More</Link>
          </div>

          <div className="col-md-5 homeLeading" style={{ userSelect: 'none' }}>
            <h2>Leading Edge Technology</h2>

            <p>
              Technico has revolutionized seed potato production with its proprietary TECHNITUBER® Technology that produces high-quality, virus-free miniature seed potatoes in protected environment without genetic modification.


            </p>
            <p>
              With this technology, we are able to deliver commercially affordable Early generation seed potatoes, 3-4 field generations (years) earlier than traditional Seed Potato production methods besides ensuring high-yield and purity.
            </p>
            <Link to="/facilities">Learn More</Link>
          </div>
        </div> */}

      </div>

      {/* Our Business */}
      {/* <div className="businessSection" style={{ userSelect: 'none' }}>
        <div className="businessInner" style={{ userSelect: 'none' }}>
          <h2>
            <span className="whiteColor">Our Business</span>
          </h2>
          <p>
            Technico is present across potato value chain i.e., growing TECHNITUBER® Seed Pre-Basic seed (G0), Early generation seed potatoes (G3) for all three segments - Table, French Fries and Crisps, Chipgrade potatoes for its parent company’s brand BINGO! & Other Chips manufacturer and Table potatoes for its parent company’s brand ‘FARMLAND’. Our product has been widely accepted by the farmers and processors across India as well as beyond. <br />

            Technico has 350+ seed potato varieties in its pool and we keep on updating our pool of varieties in collaboration with Central Potato Research Institute (CPRI), International Potato Center (CIP) and 15+ global breeders across various continents by running R&D Programme through our ‘Centre of Excellence’.
            <br />
            We focus on sustainable farming practices, providing our clients with reliable, cost-effective solutions that meet the growing demands of the food industry worldwide.
            <br />
            Technico is committed to advancing the potato industry by ensuring quality, sustainability, and efficiency in every step of potato value chain.


          </p>
          <Link to="/our-business">Learn More</Link>
        </div>
      </div> */}

      {/* makes Different */}
      {/* <div className="makeDifferentMain" style={{ userSelect: 'none' }}>
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
      </div> 
        </div>
      </div> */}

      <KeyFeatures />

    </div>
  </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

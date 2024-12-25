import React from 'react';
import PropTypes from 'prop-types';
import './Technituber.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import CommonBanner from '../../components/CommonBanner/CommonBanner';

const Technituber = () => (
  <>
  <CommonBanner pageTitle="TECHNITUBER® Seed" titleImage="images/TECHNITUBER.png"/>
  <div className="Technituber" data-testid="Technituber">
<section className="section1 container-fluid mx-auto position-relative">
        <img 
          src={process.env.PUBLIC_URL + 'images/cartoon.png'} 
          className="position-absolute" 
          style={{ right: '20px', top: '-12%' }} 
          alt="Cartoon" 
        />
        <div className="fullwidth mx-auto row align-items-center">
          <div className="col-lg-6 p-0 d-flex flex-column">
            <ul>
              <li>TECHNITUBER® Seed</li>
            </ul>
            <h1>TECHNITUBER® <span style={{ color: '#367d16' }}>Seed</span></h1>
            <ul>
              <li>Existing Processes</li>
            </ul>
            <p>Produced in our state-of-the-art TECHNITUBER® facilities located around the world, this product can revolutionize your current seed production and procurement systems.</p>
            <p>An approximate size of 13mm and weighing approximately 1.5 grams, this product is planted at approximately 100 kg per hectare versus traditional seed weighing up to 4,000 kg per hectare.</p>
            <p>The high health status of the TECHNITUBER® seed produced in protected environments allows for disease quarantine regulations to be easily met and the compact size avoids the wasted costs incurred in storage and transport of much larger seed pieces.</p>
            <p>TECHNITUBER® seed offers the perfect opportunity to develop a reduced field generation seed scheme to improve the quality and yield of your final seed product.</p>
          </div>
          <div className="col-lg-6 p-0">
            <div className="row">
              <div className="col-md-6 collection d-flex justify-content-center justify-content-md-start flex-column">
                <img 
                  src={process.env.PUBLIC_URL + 'images/image (11).png'} 
                  className="img-fluid mb-3" 
                  alt="Image 11"
                />
                <img 
                  src={process.env.PUBLIC_URL + 'images/main.png'} 
                  className="img-fluid mb-3" 
                  alt="Main" 
                />
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img 
                  src={process.env.PUBLIC_URL + 'images/image (10).png'} 
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
          src={process.env.PUBLIC_URL + 'images/TREE-BG.png'} 
          className="position-absolute" 
          style={{ top: '0%' }} 
          alt="Tree Background"
        />
        <div className="fullwidth mx-auto row justify-content-center align-items-center">
          <div className="col-lg-5 p-0">
            <img 
              src={process.env.PUBLIC_URL + 'images/aachar.png'} 
              alt="Aachar" 
              style={{ width: '100%' }} 
            />
          </div>
          <div className="col-lg-7 aachar-container">
            <ul>
              <li className="l-green">TECHNITUBER® Seed details</li>
            </ul>
            <h1 className="d-green">Detail<span className="l-green">s</span></h1>
            <p className="mb-5">This unique propagule, which involves no genetic engineering, will revolutionize your current seed production practices.</p>
            <p className="mb-5">Sizes Available: 12-15 mm – approx 1.5 gram</p>
            <p className="mb-5">These tubers are delivered pre-sprouted in ‘field-ready’ conditions and are easily transported.</p>
            <p className="mb-5">High volume, low cost propagules produced to world-class standards in controlled environmental facilities will allow you to slash up to four years off the age of your current seed programs and in doing so improve the quality of your final seed product.</p>
            <p className="mb-5">(Note: We can provide a very cost-efficient product, however, minimum order volumes do apply)</p>
          </div>
        </div>
      </section>

      <section className="section3 container-fluid position-relative mx-auto">
        <div className="fullwidth mx-auto row align-items-center justify-content-center">
          <div className="col-lg-6">
            <ul>
              <li>Grow Seed</li>
            </ul>
            <h1 className="d-green">Grow Your<span className="l-green"> Own Seed Cost</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="col-md-6">
            <img 
              src={process.env.PUBLIC_URL + 'images/blank.png'} 
              style={{ width: '100%' }} 
              alt="Blank"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid position-relative section-middle">
        <img 
          src={process.env.PUBLIC_URL + 'images/tree-bg-2.png'} 
          className="position-absolute" 
          style={{ right: '0%' }} 
          alt="Tree Background 2"
        />
        <div className="fullwidth mx-auto row align-items-center">
          <div className="col-lg-7">
            <ul className="up">
              <li>Our Locations</li>
            </ul>
            <h1 className="d-green">Lorem ipsum dolor sit amet,<span className="l-green"> consectetur</span></h1>
            <p>Technico PTY Limited offers world-class Tissue Culture facilities at each of its major operations and can provide customers with a secure environment for Tissue Culture storage and production</p>
          </div>
        </div>
      </section>

      <section className="container-fluid position-relative">
        <img 
          src={process.env.PUBLIC_URL + 'images/world.png'} 
          className="world-img d-none d-lg-block" 
          alt="World"
        />
        <div className="fullwidth row mx-auto">
          <div className="col-md-6 d-flex flex-row gap-2 align-items-center india flex-wrap flex-md-nowrap">
            <img 
              src={process.env.PUBLIC_URL + 'images/india-g.png'} 
              style={{ width: '100%' }} 
              alt="India"
            />
            <div className="d-flex flex-column gap-1 justify-content-center india-container">
              <h2 className="d-green">INDIA</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
            </div>
            <div className="d-flex flex-column gap-2 number-container">
              <h2 className="bebas">13+</h2>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
        </div>
      </section>
      <KeyFeatures />
  </div>
  </>
);

Technituber.propTypes = {};

Technituber.defaultProps = {};

export default Technituber;

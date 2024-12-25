import React from 'react';
import PropTypes from 'prop-types';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import './Facilities.scss';

const Facilities = () => (
    <> 
     <CommonBanner pageTitle="Facilities" titleImage="images/facilitieslogo.png"/>
  <div className="Facilities" data-testid="Facilities">     

<section class="section1 container-fluid mx-auto position-relative mb-0">
    <div class="fullwidth mx-auto row align-items-center">
        <div class="col-lg-6 p-0 d-flex flex-column ">
            <ul>
                <li>TECHNOLOGY</li>
            </ul>
            <h1 class="d-green">TECHNITUBER® <spam style={{color: '#367d16'}}>Technology</spam></h1>
            
            <p>TECHNITUBER® Technology is a cutting-edge process developed by Technico Agri Sciences for producing large volumes of miniature, virus-free seed potatoes. This process begins with pathogen-free nuclear materials and utilizes protected production environments to ensure the highest quality and productivity year-round. The advanced technology allows Technico to produce commercial-grade seed in just 2-3 field generations, significantly faster than traditional methods, which can take 5-7 generations.</p>
            
        <p>By achieving up to 15 times the productivity of conventional minituber production methods, TECHNITUBER® technology enables the company to deliver competitively priced seeds 3-4 generations earlier, thus providing a substantial economic advantage. This process helps farmers and commercial partners achieve higher efficiency, faster turnaround, and improved crop yields, driving innovation in the seed potato industry.</p></div>
        <div class="col-lg-6 p-0">
            <img src={process.env.PUBLIC_URL + 'images/potatos.png'} style={{width: '100%'}} />
        </div>
    </div>
</section>



<section class="section3 container-fluid position-relative mx-auto px-0 mt-0">
    
    <img src={process.env.PUBLIC_URL + 'images/TREE-BG.png'} style={{top: '40%'}} />
    <div class="fullwidth mx-auto row align-items-center">
        <div class="col-lg-6">
            <h1 class="d-green">Manpura <spam class="l-green">Facility</spam></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
        </div>
        <div class="col-md-6">
        <img src={process.env.PUBLIC_URL + 'images/patato2.png'} style={{width: '100%'}} />
        </div>
    </div>
    <div class="fullwidth mx-auto row align-items-center mt-5">
        <div class="col-lg-6">
            <h1 class="d-green">RaipurRani <spam class="l-green">Facility</spam></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
        </div>
        <div class="col-md-6">
        <img src={process.env.PUBLIC_URL + 'images/chips.png'} style={{width: '100%'}} />
        </div>
    </div>
</section>



<KeyFeatures />


  </div>
  </>
);

Facilities.propTypes = {};

Facilities.defaultProps = {};

export default Facilities;

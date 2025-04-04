import React from 'react';
import PropTypes from 'prop-types';
import './OurBusiness.scss';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import Sidesticks from '../../components/Sidesticks/Sidesticks';
import { Helmet } from "react-helmet-async";

const OurBusiness = () => {
    const sections = [
      { id: 'earlygeneration', label: 'EARLY GENERATION SEED POTATOES ', icon: '/images/about1.png' }, 
      { id: 'Commercialpotatos', label: 'COMMERCIAL POTATOES', icon: '/images/about2.png' },
    ]; 
  
  
    return(
    
    <>
    <Helmet>
      <title>Our Business – Technico's Agricultural Innovations</title>
      <meta name="description" content="Explore Technico's diverse business ventures, including advanced seed technology, crop management solutions, and partnerships that drive agricultural innovation." />
    </Helmet>
    <Sidesticks sections={sections} />
  
    <CommonBanner pageTitle="Our Business" titleImage="/images/ourbusinesslogo.png"/>
    
  <div className="OurBusiness" data-testid="OurBusiness">


<section className="diginto businessMain container-fluid text-center">

    <h2 className="d-green">OUR BUSINESS</h2>
    <p>Technico is present in entire potato value chain i.e. growing TECHNITUBER® Seed (Pre basic seed), Early generation seed potatoes (G1, G2, G3) for all three segments - Table, French Fries and Crisps, Chipgrade potatoes for its parent company’s BINGO! brand & processing industry and Table potatoes for its parent company’s brand ‘FARMLAND’. Our product has been widely accepted by the farmers and processors across India as well as beyond.  <br/><br/>

Technico has 350+ seed potato varieties in its pool and we keep on updating our pool of varieties in collaboration with Central Potato Research Institute (CPRI) and global breeders by running R&D Programme through our ‘Centre of Excellence’, keeping into consideration volatile climatic conditions.  
<br/><br/>
We focus on sustainable farming practices, providing our clients with reliable, cost-effective solutions that meet the growing demands of the Potato food industry worldwide.
</p>
</section>

<section className="container-fluid">
    <div className="position-relative fullwidth mx-auto early-generation row justify-content-between" id="earlygeneration">
<div className=" col-md-6">
<img src={process.env.PUBLIC_URL + "/images/diroto1.webp"} alt="" className="onion-roots" />
            </div>
            <div className="col-md-6 d-flex flex-column gap-4 " >
                <h2 className="d-green">Early Generation Seed Potatoes</h2>
                <p>Technico Agri Sciences Ltd. is a market leader in producing Early Generation, Disease & Pathogen-Free Seed Potatoes, holding a 34% share in the premium seed market and distributing 125,000 MT annually across India. With over 350+ varieties for Table, Chips, and French Fries segments, the company collaborates with global breeders and research institutes like Central Potato Research Institute (CPRI) and CIP to deliver high-quality seeds tailored to diverse micro-climates. Its robust phygital distribution network, including ITC MAARS, and partnerships with Farmer Producing Organisation (FPOs), cold storage owners, and agri-startups ensure cost-effective delivery to farmers. Known for its trusted "TECHNICO Seed Potatoes" brand since 2003, the company consistently delivers higher yields and superior quality, empowering farmers while maintaining its competitive edge.</p>
                <div className="d-flex flex-row  gap-5 seed-container justify-content-between d-none">
							<img src={process.env.PUBLIC_URL + "/images/seed1.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/seed2.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/seed3.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/seed4.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/seeed5.png"} alt="" />

                            
                        </div>
            </div>
    </div>


    <div className="position-relative fullwidth mx-auto early-generation pt-5 row justify-content-between" id="Commercialpotatos">
<div className=" col-md-6">
<img src={process.env.PUBLIC_URL + "/images/diroto2.webp"} alt="" className="tree-roots"  />
</div>
            <div className="col-md-6 d-flex flex-column gap-4 ">
                <h2 className="d-green">Commercial Potatoes</h2>
                <p>Technico is a key player in the commercial potato sector, specializing in chip-grade and fry-
stock potatoes across major processing regions in India. The company is involved in
contract farming, procurement, and storage, supplying high-quality raw materials to the chips
and French fry (FF) industries. With proprietary potato varieties known for high dry matter
content, low defects, and excellent storability, Technico ensures the production of premium-
grade process potatoes. The company collaborates closely with farmers to cultivate disease-
free, high-quality potatoes and manages cold storage facilities near farms to reduce post-
harvest losses. Through strategic contracts with chips and FF industry partners, Technico
ensures a consistent supply of process potatoes at pre-agreed prices, delivering superior
quality to meet the needs of both the Indian market and neighbouring regions.</p>
                <div className="d-flex flex-row  gap-5 seed-container justify-content-between d-none">
							<img src={process.env.PUBLIC_URL + "/images/bingo1.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/bingo2.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/bingo3.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/bingo4.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/images/bingo5.png"} alt="" />

                            
                        </div>
                
                
            </div>
    </div>
</section>






    < KeyFeatures />
  </div>
  </>
)};

OurBusiness.propTypes = {};

OurBusiness.defaultProps = {};

export default OurBusiness;

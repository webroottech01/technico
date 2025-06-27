import  {React , useState} from 'react';
import PropTypes from 'prop-types';
import './OurBusiness.scss';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import Sidesticks from '../../components/Sidesticks/Sidesticks';
import { Helmet } from "react-helmet-async";
import BannerTicker from '../../components/bannerticker/bannerticker';

const OurBusiness = () => {
    const sections = [
      { id: 'earlycom', label: 'EARLY GENERATION SEED POTATOES ', icon: '/images/about1.png' }, 
      { id: 'earlycom', label: 'COMMERCIAL POTATOES', icon: '/images/about2.png' },
    ]; 
  
    const [active, setActive] = useState('earlygeneration');

    const othersections = [
      {
        id: 'earlygeneration',
        label: 'Early Generation Seed',
        image: '/images/early-seed.png', // hand holding seed
        description: `Technico Agri Sciences Ltd. is a market leader in early generation, disease-free seed potatoes, with a 34% share in India’s premium seed market and annual distribution of 125,000 MT.
    With 350+ varieties for table, chips, and French fries, developed in collaboration with CPRI, CIP, and global breeders, our seeds are suited to diverse Indian micro-climates.

    Through a strong phygital network—including ITC MAARS, FPOs, cold storages, and agri-startups—we ensure timely, cost-effective delivery to farmers.

    Trusted under the TECHNICO Seed Potatoes brand since 2003, we consistently deliver high yields and superior quality, empowering farmers nationwide.`,
      },
      {
        id: 'commercial',
        label: 'Commercial Potatoes',
        image: '/images/commercial-potato.png', // man with potatoes
        description: `Technico is a leading supplier of chip-grade and fry-stock potatoes across India’s major processing regions. We manage contract farming, procurement, and storage, ensuring a steady supply of premium raw material to chips and French fry (FF) industries.
    
        Our proprietary varieties offer high dry matter, low defects, and excellent storability—ideal for processing. By working directly with farmers and maintaining cold storage facilities near farms, we ensure high-quality, disease-free harvests with minimal post-harvest losses. 

    With strategic contracts and pre-agreed pricing, Technico guarantees reliable, high-quality supply to processors in India and neighbouring markets.`,
      },
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


<section className="diginto businessMain container">
<div className='row align-items-center'>
<div className='col-md-8'>
<h2 className="d-green">OUR BUSINESS</h2>
    <p>Technico is engaged across the entire potato value chain—producing TECHNITUBER® (pre-basic seed) and early generation seed potatoes (G1–G3) for Table, French Fries, and Crisps segments.
    </p>
    <h6>
We supply:
</h6>
<ul>
  <li>
  Chip-grade potatoes for ITC’s BINGO! and other processors
  </li>
  <li>
  Table potatoes for ITC’s FARMLAND brand
  </li>
</ul>



</div>
<div className='col-md-4'>
<img src={process.env.PUBLIC_URL + "/images/businessbanner.png"} alt="" className="tree-roots"  /> 
</div>
</div>

    
</section>
<BannerTicker /> 



<div className="interactive-business row no-gutters" id="earlycom">
      {othersections.map((sec) => (
        <div
          key={sec.id}
          className={`col-md-6 section ${active === sec.id ? 'active' : 'inactive'}`}
          onClick={() => setActive(sec.id)}
        >
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + sec.image} alt={sec.label} />
            <div className="label">{sec.label}</div>
          </div>
          <div className="desc-wrapper">
            {active === sec.id && (
              <div className="description">
                <p>{sec.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>



    < KeyFeatures />
  </div>
  </>
)};

OurBusiness.propTypes = {};

OurBusiness.defaultProps = {};

export default OurBusiness;

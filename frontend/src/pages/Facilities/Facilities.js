import React from 'react';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import './Facilities.scss';
import Reusebanner from '../../components/ReuseBanner/Reusebanner';

const Facilities = () => {

      const sliderImages = [
        { url: '/images/facility.webp', alt: 'Business New' },
        { url: '/images/facilit1.webp', alt: 'Business More' },
        { url: '/images/facility2.webp', alt: 'Extra Image' },
      ];


    return(
    <> 
  <Reusebanner pageTitle="Facilities" titleImage="/images/facilitieslogo.png" sliderImages={sliderImages}/>
  <div className="Facilities" data-testid="Facilities">

<section className="section1 container-fluid mx-auto position-relative mb-0">
    <div className="fullwidth mx-auto row align-items-center">
      <h2 className="d-green col-12 ">TECHNITUBER® Technology</h2>
        <div className="col-lg-6 d-flex flex-column ">
            
            
            
            <p>TECHNITUBER® Technology is a cutting-edge process developed by Technico Agri Sciences for producing large volumes of miniature, virus-free seed potatoes. This process begins with pathogen-free nuclear materials and utilizes protected production environments to ensure the highest quality and productivity year-round. The advanced technology allows Technico to produce commercial-grade seed in just 2-3 field generations, significantly faster than traditional methods, which can take 5-7 generations.</p>
            
        <p>By achieving up to 15 times the productivity of conventional minituber production methods, TECHNITUBER® technology enables the company to deliver competitively priced seeds 3-4 generations earlier, thus providing a substantial economic advantage. This process helps farmers and commercial partners achieve higher efficiency, faster turnaround, and improved crop yields, driving innovation in the seed potato industry.</p></div>
        <div className="col-lg-6 p-0">
        <video width="100%" controls autoPlay>
                <source src={process.env.PUBLIC_URL + 'videos/facilityvideo.mp4'} type="video/webm" />
                Your browser does not support the video tag.
              </video>
        </div>
    </div>
</section>



<section className="section3 container-fluid position-relative mx-auto px-0 mt-0">
    
    <img src={process.env.PUBLIC_URL + '/images/TREE-BG.png'} className='extrabgimage'/>
    <div className="fullwidth mx-auto row align-items-center">
        <div className="col-lg-6">
            <h2 className="d-green">Manpura Facility</h2>
            
        </div>
        <div className="col-md-6">
        <img src={process.env.PUBLIC_URL + '/images/aboucompany.webp'} />
       
        </div>
    </div>
    <div className="fullwidth mx-auto row align-items-center mt-5">
        <div className="col-lg-6">
            <h2 className="d-green">RaipurRani Facility</h2>
            
        </div>
        <div className="col-md-6">
        <img src={process.env.PUBLIC_URL + '/images/raipurrani.webp'} />

        </div>
    </div>
</section>



<KeyFeatures />


  </div>
  </>
)};


export default Facilities;

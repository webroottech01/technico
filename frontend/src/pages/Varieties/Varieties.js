import React from 'react';
import PropTypes from 'prop-types';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import './Varieties.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Varieties = () => {
    const navigate = useNavigate();

    const handleNavigation = (categoryIndex) => {
      navigate('/varieties-all', { state: { categoryIndex } });
    }; 

    return(
  <>
  <Helmet>
      <title>Explore Diverse range of high-quality potatoes at Technico </title>
      <meta name="description" content="We have various variants of potatoes that range from French fries variety, chips variety to table potatoes variety. Every variety has different characteristics." /> 
    </Helmet>
  <CommonBanner pageTitle="Varieties" titleImage="/images/varietiesnewbanner.png"/>
  <div className="Varieties" data-testid="Varieties">
  <section className="container-fluid text-center varieties position-relative">
            <div className="dish-strip d-none d-lg-block"></div>
           
                
   
            <h2 className="d-green mb-0">the things we have</h2> 
            <p className="d-green mb-0 halftext">We offer Varietal Solutions well suited to diverse agro climate & different soil types to secure the interpted supply chain as well as secure income to farmers</p>
            <p className='halftext'>We offer a diverse range of high-quality potato varieties tailored for French fries, chips, and table use purpose.</p>

            <div className="chipssec row fullwidth mx-auto pt-5 mt-5 position-relative">
                <div className="position-relative col-lg-4 dish" onClick={() => handleNavigation(0)}>
                    <img src={process.env.PUBLIC_URL + '/images/frenchfries.png'} />
                    <h3>01</h3>
                    <h2>French fries</h2>
                    <p> Our French fries varieties are specifically developed for exceptional crispiness, high dry matter content and consistent quality. </p>
                </div>
                <div className="position-relative col-lg-4 dish"  onClick={() => handleNavigation(1)}>
                    <img src={process.env.PUBLIC_URL + '/images/chipsbowl.png'} />
                    <h3>02</h3>
                    <h2>chips</h2>
                    <p>Our chip-grade varieties deliver premium quality with low sugar content for uniform color, high solids for reduced oil usage, and defect-free consistency for the perfect crunch. </p>
                </div>
                <div className="position-relative col-lg-4 dish"  onClick={() => handleNavigation(2)}>

                    <img src={process.env.PUBLIC_URL + '/images/potato-red.png'} />
                    <h3>03</h3>
                    <h2>Table</h2>
                    <p>Our table varieties are versatile and rich in flavor, making them ideal for everyday cooking, whether boiling, baking, or frying. Adaptable to diverse micro-climates and resistant to diseases, our potatoes cater to the needs of farmers, processors, and consumers alike, ensuring superior quality across the board.</p> 
                </div>
            </div>

        </section>
        < KeyFeatures />
        
  </div>
  </>
  
)}; 

Varieties.propTypes = {};

Varieties.defaultProps = {};

export default Varieties;

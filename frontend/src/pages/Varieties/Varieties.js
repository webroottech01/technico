import React from 'react';
import PropTypes from 'prop-types';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import './Varieties.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import { useNavigate } from "react-router-dom";
const Varieties = () => {
    const navigate = useNavigate();

    const handleNavigation = (categoryIndex) => {
      navigate('/varieties-all', { state: { categoryIndex } });
    }; 

    return(
  <>
  <CommonBanner pageTitle="Varieties" titleImage="/images/varietieslogo.png"/>
  <div className="Varieties" data-testid="Varieties">
  <section className="container-fluid text-center varieties position-relative">
            <div className="dish-strip d-none d-lg-block"></div>
            <ul>
                <li className="d-green">what we offer</li>
            </ul>
            <h2 className="d-green mb-0">the things we have</h2> 
            <p>At Technico Agri Sciences Ltd., we offer a diverse range of high-quality potato varieties tailored for French fries, chips, and table use.</p>

            <div className="chipssec row fullwidth mx-auto pt-5 mt-5 position-relative">
                <div className="position-relative col-lg-4 dish" onClick={() => handleNavigation(0)}>
                    <img src={process.env.PUBLIC_URL + '/images/frenchfries.png'} />
                    <h3>01</h3>
                    <h2>French fries</h2>
                    <p> Our French fries varieties are specifically bred for exceptional crispiness, high dry matter content, and uniform size, ensuring minimal oil absorption and consistent production of golden, delicious fries. </p>
                </div>
                <div className="position-relative col-lg-4 dish"  onClick={() => handleNavigation(1)}>
                    <img src={process.env.PUBLIC_URL + '/images/chipsbowl.png'} />
                    <h3>02</h3>
                    <h2>chips</h2>
                    <p>For the snack industry, our chip-grade potatoes deliver premium quality with low sugar content for uniform color, high solids for reduced oil usage, and defect-free consistency for the perfect crunch. </p>
                </div>
                <div className="position-relative col-lg-4 dish"  onClick={() => handleNavigation(2)}>

                    <img src={process.env.PUBLIC_URL + '/images/potato-red.png'} />
                    <h3>03</h3>
                    <h2>Tables</h2>
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

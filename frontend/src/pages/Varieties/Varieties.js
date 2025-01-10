import React from 'react';
import PropTypes from 'prop-types';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import './Varieties.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';
import { useNavigate } from "react-router-dom";
const Varieties = () => {
    const navigate = useNavigate();

    const handleNavigation = (categoryIndex) => {
      navigate('/coming-soon', { state: { categoryIndex } });
    };

    return(
  <>
  <CommonBanner pageTitle="Varieties" titleImage="images/varietieslogo.png"/>
  <div className="Varieties" data-testid="Varieties">
  <section className="container-fluid text-center varieties position-relative">
            <div className="dish-strip d-none d-lg-block"></div>
            <ul>
                <li className="d-green">what we offer</li>
            </ul>
            <h1 className="d-green mb-0">the things <span className="l-green"> we have</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam<br /> tristique, at pellentesque tortor fermentum. Integer convalli</p>

            <div className="chipssec row fullwidth mx-auto pt-5 mt-5 position-relative">
                <div className="position-relative col-lg-4 dish" onClick={() => handleNavigation(0)}>
                    <img src={process.env.PUBLIC_URL + 'images/frenchfries.png'} />
                    <h3>01</h3>
                    <h2>French fries</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
                </div>
                <div className="position-relative col-lg-4 dish"  onClick={() => handleNavigation(1)}>
                    <img src={process.env.PUBLIC_URL + 'images/chipsbowl.png'} />
                    <h3>02</h3>
                    <h2>chips</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
                </div>
                <div className="position-relative col-lg-4 dish"  onClick={() => handleNavigation(2)}>

                    <img src={process.env.PUBLIC_URL + 'images/potato-red.png'} />
                    <h3>03</h3>
                    <h2>Tables</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
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

import React from 'react';
import PropTypes from 'prop-types';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import './Varieties.scss';
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures';

const Varieties = () => (
  <>
  <CommonBanner pageTitle="Varieties" titleImage="images/varietieslogo.png"/>
  <div className="Varieties" data-testid="Varieties">
  <section class="container-fluid text-center varieties position-relative">
            <div class="dish-strip d-none d-lg-block"></div>
            <ul>
                <li class="d-green">what we offer</li>
            </ul>
            <h1 class="d-green mb-0">the things <spam class="l-green"> we have</spam></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam<br /> tristique, at pellentesque tortor fermentum. Integer convalli</p>

            <div class="chipssec row fullwidth mx-auto pt-5 mt-5 position-relative">
                <div class="position-relative col-lg-4 dish">
                    <img src={process.env.PUBLIC_URL + 'images/frenchfries.png'} />
                    <h3>01</h3>
                    <h2>French fries</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
                </div>
                <div class="position-relative col-lg-4 dish">
                    <img src={process.env.PUBLIC_URL + 'images/chipsbowl.png'} />
                    <h3>02</h3>
                    <h2>chips</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p>
                </div>
                <div class="position-relative col-lg-4 dish">

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
  
); 

Varieties.propTypes = {};

Varieties.defaultProps = {};

export default Varieties;

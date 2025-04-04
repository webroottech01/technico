import React from 'react';
import PropTypes from 'prop-types';
import './KeyFeatures.scss';

const KeyFeatures = () => (
<section className="container-fluid key-features mx-auto">
    <div className="container  mx-auto">
        <h2 className="d-green">EARLY GENERATION   SEED POTATOES</h2>
        <div className="row justify-content-between  ">
            
            <div className="cards col-lg-4 col-md-6 col-12 d-flex flex-column gap-2">
                <img src={process.env.PUBLIC_URL + '/images/potatos3.png'} alt="Feature 2" />
                <h3>2,00,000 MT +<br /></h3>
            </div>
            <div className="cards col-lg-4 col-md-6 col-12 d-flex flex-column gap-2">
                <img src={process.env.PUBLIC_URL + '/images/fsrmer.png'} alt="Feature 3" />
                <h3>2000+
                <br />CONTRACT GROWERS</h3>
                <h3>
                100,000+ <br />BENEFECIARY FARMERS</h3>
                
            </div>
            <div className="cards col-lg-4 col-md-6 col-12 d-flex flex-column gap-2">
                <img src={process.env.PUBLIC_URL + '/images/area.png'} alt="Feature 4" />
                <h3>6,000 + HECTARES<br /></h3>
                
            </div>
        </div>
    </div>
    <div className="container  mx-auto">
        <h2 className="d-green">COMMERCIAL POTATOES</h2>
        <div className="row justify-content-between">
            
            <div className="cards col-lg-4 col-md-6 col-12 d-flex flex-column gap-2">
                <img src={process.env.PUBLIC_URL + '/images/potatos3.png'} alt="Feature 2" />
                <h3>1,00,000 MT +<br /></h3>
            </div>
            <div className="cards col-lg-4 col-md-6 col-12 d-flex flex-column gap-2">
                <img src={process.env.PUBLIC_URL + '/images/fsrmer.png'} alt="Feature 3" />
                <h3>2500+
                <br />CONTRACT GROWERS</h3>

            </div>
            <div className="cards col-lg-4 col-md-6 col-12 d-flex flex-column gap-2">
                <img src={process.env.PUBLIC_URL + '/images/area.png'} alt="Feature 4" />
                <h3>4,000 + HECTARES<br /></h3>
                
            </div>
        </div>
    </div>
</section>
);

KeyFeatures.propTypes = {};

KeyFeatures.defaultProps = {};

export default KeyFeatures;

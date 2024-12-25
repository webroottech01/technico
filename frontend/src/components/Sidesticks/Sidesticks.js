import React from 'react';
import PropTypes from 'prop-types';
import './Sidesticks.scss';


const Sidesticks = ({ sections }) => ( 
    <div className="main-corner d-flex flex-column gap-2">
        {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="corner-container d-flex flex-row">
                <img src={process.env.PUBLIC_URL + section.icon} alt={section.label} />
                <h4>{section.label}</h4>
            </a>
        ))}
    </div>
);

Sidesticks.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired, 
        })
    ).isRequired,
};

Sidesticks.defaultProps = {};

export default Sidesticks;

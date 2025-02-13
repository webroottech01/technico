import React, { useState } from 'react';
import './infopages.scss';

const CSRpolicy = () => {

  return (
    <>
      <div className='infopages CSRpolicy'>
        <div className="container">

          <h1>CORPORATE SOCIAL RESPONSIBILITY</h1>
          <p>&nbsp;</p>
          <h2><a href={process.env.PUBLIC_URL + 'pdfs/TASL-CSR-Policy.pdf'} target="blank">Corporate Social Responsibility Policy </a></h2>
          <h2><a href={process.env.PUBLIC_URL + 'pdfs/CSR-Committee-Composition.pdf'} target="blank">CSR Committee </a></h2>
          <h2><a href={process.env.PUBLIC_URL + 'pdfs/CSR_Programmes_2425.pdf'} target="blank">CSR Programmes approved by the Board of Directors of the Company   </a></h2>

         


        </div>
      </div>
    </>
  )
};

export default CSRpolicy;

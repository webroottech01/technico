import React, { useState } from 'react';
import './infopages.scss';
import { Helmet } from "react-helmet-async";

const CSRpolicy = () => {

  return (
    <>
    <Helmet>
      <title>Technico Group CSR Policy - Our Committed to Social Impact</title>
      <meta name="description" content="Explore Technico Group's Corporate Social Responsibility initiatives focused on sustainability, community development, and creating a positive social impact." />
    </Helmet>
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

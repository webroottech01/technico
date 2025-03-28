import React, { useState } from 'react';
import './infopages.scss';
import { Helmet } from "react-helmet-async";

const Compilance = () => {

  return (
    <>
    <Helmet>
      <title>Technico Compliance Policy - Ethical & Legal Commitment </title>
      <meta name="description" content=" Discover Technico Group's commitment to ethical practices & compliance. Learn how we ensure transparency, accountability, and adherence to legal standards." />
    </Helmet>
      <div className='infopages compilance'>
        <div className="container">

          <h1>COMPLIANCE</h1>
          <p>&nbsp;</p>
          <h2>General Meetings</h2>

          <h2><a href={process.env.PUBLIC_URL + 'pdfs/Remuneration-Policy.pdf'} target="blank">Remuneration Policy</a></h2>

          <h3>Annual Return</h3>
          <ul>
            <li><a href={process.env.PUBLIC_URL + 'pdfs/Annual%20Return 2021-22.pdf'} target="blank" >
              <span><strong>2021-2022</strong></span></a></li>
            <li><a href={process.env.PUBLIC_URL + 'pdfs/Annual_Return_2022-23.pdf'} target="blank">
              <span><strong>2022-2023</strong></span></a></li>
            <li>
              <span><strong><a href={process.env.PUBLIC_URL + 'pdfs/Annual_Return_2023-24.pdf'} target="blank">2023-2024</a></strong></span></li>
          </ul>


        </div>
      </div>
    </>
  )
};

export default Compilance;

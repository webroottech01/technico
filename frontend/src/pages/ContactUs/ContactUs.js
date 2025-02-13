import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div className='contactpage'>
      <section className="Contact-us container-max">
        <div className="contact-us-container">
          <div className="top-head">
            <h2 className="text-uppercase fw-semibold">Fill the form</h2>
            <h3 className="text-uppercase fw-semibold">
              to <span>contact us.</span>
            </h3>
          </div>

          <div className="container-max fle">
            <div className="form-container row gx-0 justify-content-between">
              <div className="user-form col-md-8 form-section px-0">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 justify-content-between">
                    <div className="col-md-5 mt-0">
                      <input
                        type="text"
                        className="form-control border-0 border-bottom"
                        id="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{ marginBottom: '100px' }}
                      />
                    </div>
                    <div className="col-md-5 mt-0">
                      <input
                        type="text"
                        className="form-control border-0 border-bottom"
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{ marginBottom: '100px' }}
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <input
                      type="email"
                      className="form-control border-0 border-bottom"
                      id="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ marginBottom: '100px' }}
                    />
                  </div>
                  <div className="mt-0">
                    <textarea
                      className="form-control border-0 border-bottom"
                      id="message"
                      placeholder="Enter your message here"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      style={{ marginBottom: '100px' }}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>

              <div className="help-text col-md-4 text-section">
                <div className="content-box">
                  <h6 className="right-head">• NEED SPECIFIC HELP?</h6>
                  <p className="light-paragraph">
                  Connect with us today to take the first step toward excellence in potato farming and processing. 
                  </p>
                  <p className="text-success d-none">
                    <i className="brochure-img bi bi-upload">
                      <img src={process.env.PUBLIC_URL + "images/brochure.png"} alt="Brochure Icon" />
                    </i>
                    <a href="#" className="brochure text-decoration-none">
                      Download our brochure
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-section container-max">
        <div className="container-max card-container">
          <div className="d-flex flex-wrap justify-content-center gap-5">
            <div className="info-card py-0">
              <img src={process.env.PUBLIC_URL + "images/locate.png"} alt="Location Icon" />
              <h5>ADDRESS</h5>
              <p>Registered Office : 25, Community Centre,Basant Lok, Vasant Vihar, New Delhi 110057, India.</p>
              <p>Head Office : SCO 835, Sector-13, N.A.C Manimajra, Chandigarh-160101</p>
            </div>

            <div className="info-card email py-0">
              <img src={process.env.PUBLIC_URL + "images/mail.png"} alt="Mail Icon" />
              <h5>EMAIL</h5>
              <p>hr.tasl@technico.org.in</p>
              <p>technico@technico.org.in</p>
            </div>

            <div className="info-card phone py-0"> 
              <img src={process.env.PUBLIC_URL + "images/call.png"} alt="Call Icon" />
              <h5>PHONE NUMBER</h5>
              <p>+91-11 46015209</p>
              <p>+91-172-6619800</p>
            </div>
          </div>
        </div>
      </section>

      <section className="social-links container-max d-none">
        <div className="container">
          <div className="social-icons-container d-flex justify-content-center flex-wrap">
            <div className="social-icon">
            <img src={process.env.PUBLIC_URL + "images/fbtecnico.png"} alt="Call Icon" />
            </div>
            <div className="social-icon">
            <img src={process.env.PUBLIC_URL + "images/insta.png"} alt="Call Icon" />
             
            </div>
            <div className="social-icon">
            <img src={process.env.PUBLIC_URL + "images/tweettecnico.png"} alt="Call Icon" />
             
            </div>
            <div className="social-icon">
            <img src={process.env.PUBLIC_URL + "images/138-linkedin.png"} alt="Call Icon" />

            </div>
            <div className="social-icon">
            <img src={process.env.PUBLIC_URL + "images/099-youtube.png"} alt="Call Icon" />
            
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactUs;

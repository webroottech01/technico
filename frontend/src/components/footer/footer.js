import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => (
    <>
        <footer className="mt-5 site-footer " >
            <div className="fullwidth row mx-auto mb-5 justify-content-between">
                <div className="logo col-md-2">
                    <img src={process.env.PUBLIC_URL + '/images/footerlogo.png'} />
                    <p className="mt-4 mb-0 text-center">Corporate Identity Number:</p>
                    <p className="text-center">U01111DL1999PLC098646</p>
                </div>
                <div className="links col-md-2 col-6">
                    <h2>Quick links</h2>
                    <div className=" d-flex flex-row flex-wrap">
                        <ul className="p-0" >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/our-business">Our Businesses</Link></li>
                            <li><Link to="/facilities">Facilities</Link></li>
                            <li><Link to="/technituber">Technituber®</Link></li>
                            <li><Link to="/varieties">Varieties</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="links secondlink col-md-2 col-6">
                    <h2>Learn More</h2>
                    <div className=" d-flex flex-row flex-wrap">
                        <ul className="p-0" >
                            <li><Link to="/compilance">Compliance</Link></li>
                            <li><Link to="/corporate-social-responsibility-policy">Corporate Social Responsibility Policy</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                            <li><Link to="/terms&condition">Terms & condition</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="address col-md-5">
                    <h2>For any queries or grievances contact: </h2>
                    <div className="address-type">
                        <img src={process.env.PUBLIC_URL + '/images/email.png'} />
                        <p>hr.tasl@technico.org.in</p>
                    </div>
                    <div className="address-type">
                        <img src={process.env.PUBLIC_URL + '/images/home (1).png'} />
                        <p>Registered Office : 25, Community Centre,Basant Lok,
                            Vasant Vihar, New Delhi 110057, India.</p>
                    </div>
                    <div className="address-type">
                        <img src={process.env.PUBLIC_URL + '/images/phone.png'} />
                        <p>+91-11 46015209</p>
                    </div>
                    <div className="address-type">
                        <img src={process.env.PUBLIC_URL + '/images/home (1).png'} />
                        <p>Head Office : SCO 835, Sector-13, N.A.C Manimajra, Chandigarh-160101</p>
                    </div>
                    <div className="address-type">
                        <img src={process.env.PUBLIC_URL + '/images/phone.png'} />
                        <p>+91-172-6619800</p>
                    </div>
                    <div className="address-type">
                        <img src={process.env.PUBLIC_URL + '/images/email.png'} />
                        <p>technico@technico.org.in</p>
                    </div>




                </div>
                
            </div>
            <div className="container-fluid copyright">
                <div className="fullwidth mx-auto">
                    <p>© Copyright. TECHNITUBER® are the registered Trade Marks of Technico Agri Sciences Limited. <a href="https://webroottech.com/" target="blank">Website Created By : Webroot Technologies</a></p>

                </div>
            </div>

        </footer>
    </>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

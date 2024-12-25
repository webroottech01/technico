import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router';
import styles from './header.scss';



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
  <header className={isSticky ? "sticky" : "non-sticky"} data-testid="header">
    {/* <img src="pics/Rectangle 795.png" className="position-absolute green-strip d-none d-lg-block"> */}
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-lg-center justify-content-between">
        
        <button
          className="navbar-toggler ham-tongle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse "
          id="navbarNavDropdown" 
        >
          <ul className="navbar-nav text-capitalize align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/our-business" activeClassName="active">
              Our Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/facilities" activeClassName="active">
                Facilities
              </NavLink>
            </li>
            <li className="nav-item navlogo">
            <NavLink className="navbar-brand m-0" to="/">
          <img src={process.env.PUBLIC_URL + 'images/LOGO.png'} alt="logo" />
        </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/technituber" activeClassName="active">
              Technituber®
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/varieties" activeClassName="active">
                Varieties
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/coming-soon" activeClassName="active">
                Testimonials
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/coming-soon" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)};

export default Header;

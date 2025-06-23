import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Ensure correct import
import styles from "./header.scss";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isSticky ? "sticky" : "non-sticky"} data-testid="header">
      <nav className="navbar navbar-expand-lg">
        
        <div className="container-fluid justify-content-lg-center justify-content-between">
          {/* Mobile Logo */}
          <NavLink className="mobilelogo" to="/">
            <img src={process.env.PUBLIC_URL + "/images/LOGO.png"} alt="logo" />
          </NavLink>

          {/* Toggler Button */}
          <button
            className="navbar-toggler ham-tongle"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNavDropdown">
          <div className="nav-item navlogo">
          <NavLink className="navbar-brand m-0" to="/" onClick={(e) => e.preventDefault()}>
                  <img src={process.env.PUBLIC_URL + "/images/LOGOdark.png"} alt="logo" />
                </NavLink>
                </div>
            <ul className="navbar-nav text-capitalize align-items-center">
            <li className="nav-item navlogo">
                {/* <NavLink className="navbar-brand m-0" to="/" onClick={(e) => e.preventDefault()}>
                  <img src={process.env.PUBLIC_URL + "/images/LOGOdark.png"} alt="logo" />
                </NavLink>  */}
              </li>
              {[
                { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/our-business", label: "Our Business" },
                { path: "/facilities", label: "Facilities" },
              ].map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <NavLink className="nav-link" to={path} activeclassname="active" onClick={closeMenu}>
                    {label}
                  </NavLink>
                </li>
              ))}

              {/* Centered Logo */}
              

              {[
                { path: "/technituber", label: "Technituber®" },
                { path: "/varieties", label: "Varieties" },
                { path: "/testimonials", label: "Testimonials" },
                { path: "/contact-us", label: "Contact Us" },
              ].map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <NavLink className="nav-link" to={path} activeclassname="active" onClick={closeMenu}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="sociallinks">
                <a href="tel:1726619800">
                <img src={process.env.PUBLIC_URL + "/images/20.Telephone.png"} alt="logo" />
                </a>
                <a href="#">
                <img src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="logo" />
                </a>
                <a href="#">
                <img src={process.env.PUBLIC_URL + "/images/instagramlogo.png"} alt="logo" />
                </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

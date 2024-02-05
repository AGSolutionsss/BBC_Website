import React, { useEffect, useState } from 'react';
import './Nav_Bar.css';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import MobileMenu1 from './MobileMenu/MobileMenu1';

const Nav_Bar = (props) => {
  const [isMobileMode, setIsMobileMode] = useState(window.innerWidth <= 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMode(window.innerWidth <= 1250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.NAV');
      if (window.scrollY > 0) {
        nav.classList.add('white-bg');
      } else {
        nav.classList.remove('white-bg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`NAV ${isMobileMode ? 'mobile-mode' : ''}`} >
      <Link to="/" onClick={scrollToTop}>
        <img src={logo} alt="Logo" className="logo" style={{ marginLeft: '55px' }} />
      </Link>

      <div className='nav-end'>
        {isMobileMode ? <MobileMenu1 /> : (
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={scrollToTop}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={scrollToTop}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={scrollToTop}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={scrollToTop}>Contact Us</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav_Bar;

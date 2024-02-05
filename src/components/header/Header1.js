

import React from 'react';

import { Link as ScrollLink } from 'react-scroll';
import MobileMenu1 from '../MobileMenu/MobileMenu1';
import Logo from '../../images/logo.png';

const Header1 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header1" className={`wpo-header-style-1 ${props.hClass}`}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu1/>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <ScrollLink onClick={ClickHandler} className="navbar-brand site-logo" to="home">
                                        <img src={Logo} alt="" />
                                    </ScrollLink>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder" style={{ float: 'right' }}>
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <ScrollLink to="home">Home</ScrollLink>
                                        </li>
                                        <li>
                                            <ScrollLink to="about">About Us</ScrollLink>
                                        </li>
                                        <li>
                                            <ScrollLink to="services">Services</ScrollLink>
                                        </li>
                                        <li>
                                            <ScrollLink to="gallery">Gallery</ScrollLink>
                                        </li>
                                        <li>
                                            <ScrollLink to="contact">Contact Us</ScrollLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header1;

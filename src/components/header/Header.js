import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../../images/logo.png';

const Header = (props) => {
    const clickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <header id="header" className={`wpo-header-style-1 ${props.hClass}`}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={clickHandler} className="navbar-brand site-logo" to="/">
                                        <img src={Logo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder" style={{ float: 'right' }}>
                                    <button className="menu-close">
                                        <i className="ti-close"></i>
                                    </button>
                                {/* ------------ Nav_bar new creation has been commited moved to Nav_bar for routing --------------------*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;


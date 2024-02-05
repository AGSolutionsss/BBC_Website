import React from 'react'
import { Link} from 'react-scroll'
import MobileMenu1 from '../MobileMenu/MobileMenu1'
import Logo from '../../images/logo.png'

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
                                    <Link onClick={ClickHandler} className="navbar-brand site-logo" to="/"><img
                                        src={Logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder" style={{float:'right'}}>
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><a href="/" >Home</a></li>
                                        <li><a href="/about" >About Us</a></li>
                                        <li><a href="/services" >Services</a></li>
                                        <li><a href="/gallery" >Gallery</a></li>
                                        <li><a href="/contact" >Contact Us</a></li>
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
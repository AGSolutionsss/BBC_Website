import React from 'react';
import CtaSection from '../ctaSection/ctaSection';

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <CtaSection/>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2023 AG Solutions. All rights reserved.
                        <span style={{float:'right'}}> Visitors No : {localStorage.getItem("visitorCount")}</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
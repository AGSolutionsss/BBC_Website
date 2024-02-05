import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.css';

const Scrollbar = () => {
    return (
        <div>
            <div className="col-lg-12">
                <div className="header-menu">
                    <ul className="smothscroll">
                      <li><AnchorLink href='#top'><i className="ti-arrow-up"></i></AnchorLink></li>
                       </ul>
                </div>
            </div>
        </div>
    );
}

export default Scrollbar;

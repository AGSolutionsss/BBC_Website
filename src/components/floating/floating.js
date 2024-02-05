// ------------------------- Image Event has been initialized -------------------------
// Completely correct 

import React from 'react';
import gif from "../../images/event.gif";
import './style.css'

const Floating = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll2">
                    <a href="/interest">
                        <img src={gif} alt=""/>
                    </a>
                </ul>
            </div>
        </div>
        
    )
}

export default Floating;

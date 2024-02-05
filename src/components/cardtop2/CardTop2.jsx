import React from 'react'
import logo1 from '../../images/whyus/partner.png'
import logo2 from '../../images/whyus/done.png'
import logo3 from '../../images/whyus/savings.png'
import { useNavigate } from "react-router-dom";
import './cardtop2.scss';

const CardTop2 = (props) => {
    let navigate = useNavigate(); 
    const register = () =>{ 
        let path = `register`; 
        navigate(path);
    }
    const service = () =>{ 
        let path = `services`; 
        navigate(path);
    }
    const login = () =>{ 
        window.location.href = 'https://login.businessboosters.club/';
    }
    return (
        <div className="wpo-work-area-s2 section-padding" id="cardtop2">
            <div className="container">
                <div className="wpo-work-wrap">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-6 col-12 pb-4 card-button-cursor"  onClick={()=>register()}>
                            <div className="wpo-work-item card-button" style={{height:'275px'}}>
                                <ul >
                                    <li className="logo"><img src={logo1} alt="Join Us" style={{width:'30%'}}/></li>
                                    <li className="position card-position">
                                        Join Us
                                        <span className='card-position-desc'>
                                            <span>"We all are here to develop and boost businesses of group members. We trust each other and help each other to grow”. </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4 card-button-cursor"  onClick={()=>service()}>
                            <div className="wpo-work-item card-button" style={{height:'275px'}}>
                                <ul >
                                    <li className="logo"><img src={logo2} alt="Find a Services" style={{width:'30%'}}/></li>
                                    <li className="position card-position">
                                        Find a Services
                                        <span className='card-position-desc'>
                                            <span>"Services/Businesses referred to you would be given to you by our trusted members would be of best quality and price ”. </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4 card-button-cursor"  onClick={()=>login()}>
                            <div className="wpo-work-item card-button" style={{height:'275px'}}>
                                <ul >
                                    <li className="logo"><img src={logo3} alt="Login" style={{width:'30%'}}/></li>
                                    <li className="position card-position">
                                        Login
                                        <span className='card-position-desc'>
                                            <span>"Already Registered User ? Click here to login. You can update your details here.".</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default CardTop2;
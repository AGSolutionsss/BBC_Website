import React from 'react'
import {Link} from 'react-router-dom'
import logo1 from '../../images/followus/youtube.png'
import logo2 from '../../images/followus/facebook.png'
import logo3 from '../../images/followus/playstore.png'

const FollowUs = (props) => {
    const facebook = () => {
        window.open('https://www.facebook.com/businessboosterclub2018/', "_blank");
    }
    const youtube = () => {
        window.open('https://www.youtube.com/@BusinessboostersclubBangalore/', "_blank");
    }
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <h2>Follow Us</h2>
                            <p style={{color:'black'}}>This is group which believes in fair and honest business, to not only help customers but develop personal relationship. Thus growing in every field.</p>
                            <p style={{color:'black'}}>Our members not only enjoy business referrals but also have develop healthy family bonding with each other.</p>
                            <p style={{color:'black'}}>we believe in<b>“SABKA SATH SABKA VISHWAS”.</b></p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 pb-4">
                            <div className="wpo-work-item">
                                <ul>
                                    <li className="date">Youtube</li>
                                    <li className="logo"><img src={logo1} alt=""/></li>
                                    <li className="link"><Link onClick={() => youtube()}>Click Here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 pb-4">
                            <div className="wpo-work-item">
                                <ul>
                                    <li className="date">Facebook</li>
                                    <li className="logo"><img src={logo2} alt=""/></li>
                                    <li className="link"><Link onClick={() => facebook()}>Click Here</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop:'20px'}}>
                        <div className="col-lg-12 col-md-6 col-12 pb-4">
                            <div className="wpo-work-item">
                                <ul>
                                    <li className="date">Mobile App</li>
                                    <li className="logo"><img src={logo3} alt=""/></li>
                                    <li className="link"><Link to="/" style={{pointerEvents:'none'}}>Comming soon</Link></li>
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

export default FollowUs;
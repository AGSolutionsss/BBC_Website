import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import mentors from '../../api/mentors'
import './mentor.css';

const Mentor = (props) => {

    return (
        <div className={`wpo-service-area section-padding mentor ${props.sClass}`} id='blog' style={{paddingBottom:'620px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Our Directors</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-service-wrap">
                    <TabContent activeTab="1">
                        <TabPane tabId="1">
                            <div className="row align-items-center">
                                {mentors.slice(0, 3).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-service-item">
                                            <div className="icon">
                                                <img src={service.screens} alt="" />
                                            </div>
                                            <h2>{service.title}</h2>
                                            <p>{service.category}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4268)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4268" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            
        </div>
    );
}

export default Mentor;
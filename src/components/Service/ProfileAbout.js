import React from 'react';
import shape1 from '../../images/about/shape1.png'
import shape2 from '../../images/about/shape2.png'
import { baseURLimg } from '../../api/api';
import './about.css';

const ProfileAbout = ({image,name,about,category,experience,product}) => {
    let string = experience;
    let result = string.replace(/[^0-9]/g, "");
    return(
        <div className="wpo-about-area section-padding" id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="wpo-about-exprience-wrap">
                            <div>
                                <img className='img-mobile' src={baseURLimg+image} style={{width:'75%',borderRadius:'0%'}} alt="" />
                            </div>
                            <div className="client" style={{flexDirection:'column'}}>
                                <p style={{fontSize:'20px',color:'black'}}>{name}</p>
                                <p style={{fontSize:'14px'}}>{category}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-12 col-sm-12">
                        <div className="wpo-about-content">
                            <div className="wpo-about-title">
                                <h2>About Us</h2>
                                <p style={{textAlign:'justify'}}>{about}</p>
                            </div>
                            <h2>Product & Services</h2>
                            <div className='row mt-4'>
                                <div className='col-md-6'>
                                    <ul style={{listStyle:'none'}}>
                                        {String(product).split(',').map((str,index) => 
                                        (index % 2 == 0 ? <li style={{color:'black',paddingBottom:'20px'}}><span style={{background:'#a41460',borderRadius:'50%',padding:'4px 10px 7px 11px',color:'white',marginRight:'10px'}}><i class="fa fa-chevron-right" aria-hidden="true"></i></span>{str}</li>: '')
                                        )}
                                        
                                    </ul>
                                </div>
                                <div className='col-md-6'>
                                    <ul style={{listStyle:'none'}}>
                                        {String(product).split(',').map((str,index) => 
                                        (index % 2 != 0 ? <li style={{color:'black',paddingBottom:'20px'}}><span style={{background:'#a41460',borderRadius:'50%',padding:'4px 10px 7px 11px',color:'white',marginRight:'10px'}}><i class="fa fa-chevron-right" aria-hidden="true"></i></span>{str}</li>: '')
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4267)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="ab-shape-s2">
                <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={shape1} alt=""/>
            </div>
            <div className="line-shape-2">
                <img src={shape2} alt=""/>
            </div>
        </div>
        
        
    )
}

export default ProfileAbout;
import React from 'react'
import shape1 from '../../images/about/shape1.png'
import Navbar1 from '../../components/Navbar/Navbar1';
import shape2 from '../../images/about/shape2.png'
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import icon1 from '../../images/utkarsh.png'
import icon2 from '../../images/unnati.png'
import icon3 from '../../images/udayan.png'
import icon4 from '../../images/comingsoon.jpg'
import about from '../../images/about_us.jpg'
import Mentor from '../../components/Mentor/Mentor';
import Members from '../../components/Members/Members';

const About = (props) => {
    return (
        <>
        <Navbar1 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
        <div className={`wpo-about-area-s2 section-padding ${props.aClass}`} id='about' style={{paddingTop:'80px 0'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={about} alt="" />
                            <div className="icon-1 floating-item" style={{padding:'0px'}}><img src={icon1} alt="" /></div>
                            <div className="icon-2 floating-item" style={{padding:'0px'}}><img src={icon2} alt="" /></div>
                            <div className="icon-3 floating-item" style={{padding:'0px',bottom:'0%',right:'auto',left:'0'}}><img src={icon3} alt="" /></div>
                            <div className="icon-3 floating-item" style={{padding:'0px',bottom:'0%',right:'0',left:'auto'}}><img src={icon4} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
                        <div className="wpo-about-content">
                            <div className="wpo-about-title">
                                <h2>About Us</h2>
                                <p style={{textAlign:'justify'}}>The new digital world is very different from the old traditional business world. Advantage of this world is only enjoyed by large multiple chains of stores and online giant sellers. The small and medium business persons are slowly and surely suffering and loosing out. In such a scenario the need was to fight back with these giants collectively hence the thought of forming a decent and family type businesses group came to Mr.Bhupendra Kotwal ,Mr.Umesh Tulsiyan and Mr.Narendra Gehlot who took the lead and started consulting and convincing business friends who not only joined the mission but supported the idea.Purpose of the group is simple. Give and take referrals for business to boost business of each other. Give the best services and rates with priority to the referral business. This will make the group and its members popular and finally winning from the digital competition.</p>
                            </div>
                            <div className="wpo-about-funfact">
                                <div className="grid" style={{margin:'0 10px'}}>
                                    <div className="grid-inner">
                                        <h3><span data-count="100">100</span>+</h3>
                                        <p>Unique Business</p>
                                    </div>
                                </div>
                                <div className="grid" style={{margin:'0 10px'}}>
                                    <div className="grid-inner">
                                        <h3><span data-count="150">150</span>+</h3>
                                        <p>Trusted Members</p>
                                    </div>
                                </div>
                                <div className="grid" style={{margin:'0 10px'}}>
                                    <div className="grid-inner">
                                        <h3><span data-count="5">5</span>+</h3>
                                        <p>Successful Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Mentor/>
            <Members/>
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
                <img src={shape1} alt="" />
            </div>
            <div className="line-shape-2">
                <img src={shape2} alt="" />
            </div>
        </div>
        
        <Footer/>
        <Scrollbar/>
        </>
    )
}

export default About;
import React from 'react'
import logo1 from '../../images/whyus/1.png'
import logo2 from '../../images/whyus/2.png'
import logo3 from '../../images/whyus/3.png'


const Expriences = [
    {
        logo: logo1,
        position: 'Channal Partner',
        workFrom: '"You will get more than 60 saleing partners for your product and services. which will be boosting and take your business to new heights”. ',
    },
    {
        logo: logo2,
        position: 'Trusted and Tested ',
        workFrom: '"As per our group rules whichever product or services referred to you are server by our trusted members and are the best in quality and price”.',
    },
    {
        
        logo: logo3,
        position: 'Pocket friendly',
        workFrom: '"To become a member there is a very small fees charged. The only investment to boost your business is you".',
    }

]


const WhyUs = (props) => {
    return (
        <div className="wpo-work-area-s2 section-padding" id="whyus">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <h2>Best Consulting For Every Business</h2>
                            <p style={{color:'#000'}}>This is group which believes in fair and honest business, to not only help customers but develop personal relationship. Thus growing in every field.</p>
                            <p style={{color:'#000'}}>Our members not only enjoy business referrals but also have develop healthy family bonding with each other.</p>
                            <p style={{color:'#000'}}>we believe in<b>“SABKA SATH SABKA VISHWAS”.</b></p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {Expriences.map((exprience, exp) => (
                            <div className="col-lg-4 col-md-6 col-12 pb-4" key={exp}>
                                <div className="wpo-work-item" style={{height:'275px'}}>
                                    <ul>
                                        <li className="logo"><img src={exprience.logo} alt="" style={{width:'30%'}}/></li>
                                        <li className="position">
                                            {exprience.position} 
                                            <span>
                                                <span>{exprience.workFrom}</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
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

export default WhyUs;
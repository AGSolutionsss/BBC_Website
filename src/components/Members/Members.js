import React, { useEffect, useState } from "react";
import { baseURL,baseURLurimg } from '../../api/api';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import simg1 from '../../images/project/line-1.png'
import simg2 from '../../images/project/line-2.png';
import './Members.css';

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const Members = ({productimages}) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios({
            url: baseURL + "/getUser",
            method: "GET",

        }).then((res) => {
            setUser(res.data.profile);
        });
    }, []);
    return (
        <div className="wpo-project-area section-padding" id='portfolio'>
            <div className="container">
                <div className="wpo-section-title-s2">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="title">
                                <h2>Our Members</h2>
                                <p style={{color:'black'}}>The Trusted Partner You Can Have Faith In, Together we can do amazing things.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-2">
                            <div className="sec-title-icon">
                                <i className="fi flaticon-self-growth"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-project-wrap wpo-project-slide">
                    <Slider {...settings}>
                        {user.map((users, pro) => (
                            <div className="wpo-project-item" key={pro}>
                                <div className="wpo-project-img">
                                    <img className='mob_views' src={(users.image  === null || users.image === '' ? 'http://businessboosters.club/public/images/user_images/no_images.png' :baseURLurimg+users.image)} alt="" />
                                </div>
                                <div className="wpo-blog-text" style={{paddingTop:'30px'}}>
                                    <h2 className='titlenames'>{users.name}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="shape-p">
                <svg width="1325" height="1687" viewBox="0 0 1325 1687" fill="none">
                    <g filter="url(#filter0_f_39_4166)">
                        <circle cx="481.5" cy="843.5" r="343.5" fillOpacity="0.27" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4166" x="-362" y="0" width="1687" height="1687"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4166" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={simg1} alt="" />
            </div>
            <div className="line-shape-2">
                <img src={simg2} alt="" />
            </div>
        </div>
    );
}

export default Members;
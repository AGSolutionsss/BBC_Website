import React, { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Slider from "react-slick";
import { baseURL,baseURLurimg } from '../../api/api';
import axios from "axios";
import { Button } from '@material-ui/core'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './member.css';

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


const Member = () => {
    let  navigate = useNavigate();
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios({
            url: baseURL + "/getUser",
            method: "GET",

        }).then((res) => {
            setUser(res.data.profile);
        });
    }, []);

    const handleClickOpen = (item) => {
        navigate('/services');
    }
    return (

        <section className="wpo-blog-section section-padding" id='member' style={{paddingBottom:'120px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="wpo-section-title">
                            <h2>Our Trusted Patners</h2>
                            <p>The Trusted Partner You Can Have Faith In, Together we can do amazing things.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-wrap wpo-blog-slide owl-carousel">
                    <Slider {...settings}>
                        {user.map((users, bl) => (
                            <div className="wpo-blog-item" key={bl}>
                                <div className="wpo-blog-img">
                                    <img className='mob_view' src={(users.image  === null || users.image === '' ? 'http://businessboostersclub.online/public/images/user_images/no_images.png' :baseURLurimg+users.image)} alt="Member" />
                                </div>
                                <div className="wpo-blog-text">
                                    <h6 className='title_catg'>{users.category}</h6>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='row'>
                        <div className='col-md-12' style={{textAlign:'center'}}>
                            <Button
                                className="details theme-btn"
                                style={{width:'200px',backgroundColor:'#A41460',borderRadius:'50px',fontWeight:'600',color:'white'}}
                                onClick={() => handleClickOpen()}>
                                    Our Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-shape">
                <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                    <g filter="url(#filter0_f_39_3832)">
                        <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_3832" x="0" y="0" width="1606" height="1606"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    );
}

export default Member;
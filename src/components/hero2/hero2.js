import React, { useEffect } from 'react';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../images/bbc_banner.jpg';
import {useNavigate} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { baseURL } from '../../api/api';

const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    fade: true,
};

const Hero2 = (props) => {
    let  navigate = useNavigate();
    const handleClickOpen = (item) => {
        navigate('/services');
    }

    useEffect(() => {
        axios({
            url: baseURL + "/updateVisitorCount",
            method: "POST",

        }).then((res) => {
            
            localStorage.setItem("visitorCount",res.data.visitorCount);
            
        });
    }, []);

    return (
        <section className={`wpo-hero-slider ${props.heroClass}`}>
            
            <div className="hero-container" id="top">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container">
                                    
                                    <div className="slide-content" style={{ maxWidth: '560px', paddingTop: '120px' }}>
                                        <div data-swiper-parallax="3000" className="slide-title"></div>
                                        <div data-swiper-parallax="300" className="slide-sub-title">
                                            <h5 style={{ color: '#A41460' }}>Your Most Trusted Business Partner</h5>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>We provide expertise, connections and cultural awareness to help your organizations reach new markets and make successful deals.</p>
                                        </div>
                                        <div className="slide-btn">
                            
                            <Button
                                className="details theme-btn"
                                style={{width:'200px',backgroundColor:'#A41460',borderRadius:'50px',fontWeight:'600',color:'white',padding:'13px'}}
                                onClick={() => handleClickOpen()}>
                                    Our Services
                            </Button>
                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero2;

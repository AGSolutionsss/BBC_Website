import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../images/bbc_banner.jpg'

const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    fade: true
};

const Hero2 = (props) => {
    return (
        <section className={`wpo-hero-slider ${props.heroClass}`}>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container">
                                    <div className="slide-content" style={{maxWidth:'560px',paddingTop:'120px'}}>
                                        <div data-swiper-parallax="300" className="slide-title">
                                            
                                        </div>
                                        <div data-swiper-parallax="300" className="slide-sub-title" >
                                            <h5 style={{color:'#A41460'}}>Your Most Trusted Business Partner</h5>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>We provide expertise, connections and cultural awareness to help your organisations reach new markets and make successful deals.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btn">
                                            <a className="theme-btn" href="/services" style={{background:'#A41460'}}>Find Our Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
        
    )
}

export default Hero2;
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import simg1 from '../../images/project/line-1.png'
import simg2 from '../../images/project/line-2.png'
import { baseURLprimg } from '../../api/api';
import Modal from "./Modal";

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
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
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        }
    ]
};

const ProfileProduct = ({productimages}) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);
    const handleClick = (image,sIndex) =>{
        setCurrentIndex(sIndex);
        setClickedImg(image);
    };
    const handelRotationRight = () =>{
        const totalLength = productimages.length;
        if(currentIndex +1 >= totalLength){
            setCurrentIndex(0);
            const newUrl = productimages[0].large_image;
            setClickedImg(newUrl);
            return;
        }

        const newIndex = currentIndex + 1;
        const newUrl = productimages.filter((item) => {
            return productimages.indexOf(item)=== newIndex;
        })

        const newItem = newUrl[0].large_image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = productimages.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = productimages[totalLength - 1].large_image;
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = productimages.filter((item) => {
          return productimages.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].large_image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };
    return (
        <div className="wpo-project-area section-padding" id='portfolio'>
            <div className="container">
                <div className="wpo-section-title-s2">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="title">
                                <h2>Recent Work.</h2>
                                <p></p>
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
                        
                            <div className="wpo-project-item">
                                <div className="wpo-project-img">
                                    <img src={baseURLprimg+productimages.product_image1} onClick={() => handleClick(productimages.product_image1, 0)} style={{cursor:'pointer'}} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-item">
                                <div className="wpo-project-img">
                                    <img src={baseURLprimg+productimages.product_image2} onClick={() => handleClick(productimages.product_image2, 1)} style={{cursor:'pointer'}} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-item">
                                <div className="wpo-project-img">
                                    <img src={baseURLprimg+productimages.product_image3} onClick={() => handleClick(productimages.product_image3, 2)} style={{cursor:'pointer'}} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-item">
                                <div className="wpo-project-img">
                                    <img src={baseURLprimg+productimages.product_image4} onClick={() => handleClick(productimages.product_image4, 3)} style={{cursor:'pointer'}} alt="" />
                                </div>
                            </div>
                            <div className="wpo-project-item">
                                <div className="wpo-project-img">
                                    <img src={baseURLprimg+productimages.product_image5} onClick={() => handleClick(productimages.product_image5, 4)} style={{cursor:'pointer'}} alt="" />
                                </div>
                            </div>
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
            {clickedImg && (<Modal clickedImg={clickedImg} handelRotationRight={handelRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>)}
        </div>
    );
}

export default ProfileProduct;
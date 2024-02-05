import React, { useEffect, useState } from 'react';
import { baseURL,baseURLgalimg } from '../../api/api';
import axios from "axios";
import Modal from "./Modal";
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import './gallery.css';

const Gallery = (prop) => {

    const [gallery, setGallery] = useState([]);
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (image,sIndex) =>{
        setCurrentIndex(sIndex);
        setClickedImg(image);
    };

    const handelRotationRight = () =>{
        const totalLength = gallery.length;
        if(currentIndex +1 >= totalLength){
            setCurrentIndex(0);
            const newUrl = gallery[0].large_image;
            setClickedImg(newUrl);
            return;
        }

        const newIndex = currentIndex + 1;
        const newUrl = gallery.filter((item) => {
            return gallery.indexOf(item)=== newIndex;
        })

        const newItem = newUrl[0].large_image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = gallery.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = gallery[totalLength - 1].large_image;
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = gallery.filter((item) => {
          return gallery.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].large_image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };

    useEffect(() => {
        axios({
            url: baseURL + "/getGallery",
            method: "GET",

        }).then((res) => {
            
            console.log(res.data.gallery);
            setGallery(res.data.gallery);
        });
    }, []);

    return (
        <>
        <Navbar1 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
        <div className="container-fluid">
        <section id="gallery" className="wpo-pricing-section section-padding gallery" style={{paddingBottom:'320px'}}>
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="wpo-section-title">
                                <h2>Gallery</h2>
                                <p>A mentor is an individual with expertise who can help develop the career of a mentee. Meet our Mentors.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-project-single-item">
                    <div className="wpo-project-area-s2" style={{paddingBottom:'0px',backgroundColor:'#f8f8f8'}}>
                        <div className="wpo-project-wrap" style={{backgroundColor:"#f8f8f8"}}>
                            <div className='row'>
                                {gallery.map((item, index)=> (
                                    <>
                                        <div className="col col-lg-2 col-md-6 col-6" style={{paddingBottom:'20px'}}>
                                            
                                            <img src={baseURLgalimg+item.small_image} alt={item.small_image} onClick={() => handleClick(item.large_image, index)} style={{cursor:'pointer',width:'100%'}}/>
                                                
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    {clickedImg && (<Modal clickedImg={clickedImg} handelRotationRight={handelRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>)}
                    
                </div>
            </div>
        </section>
        </div>
        <Footer/>
        <Scrollbar/>
        </>
    )
};
export default Gallery;
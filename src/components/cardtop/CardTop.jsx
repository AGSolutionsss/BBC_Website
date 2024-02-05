import React from 'react';
import './cardtop.css';
import { useNavigate } from "react-router-dom";

const CardTop = (props) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `services`; 
        navigate(path);
      }
      const registerChange = () =>{ 
        let path = `register`; 
        navigate(path);
      }
      const loginChange = () =>{ 
        let path = `login/`; 
        navigate(path);
      }
    return(
        <div className="wpo-about-area section-padding" id='cardtop'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-sm-12 pb-4">
                        <div className="project floating-item card1">
                            <div className="icon">
                                <i style={{color:'#A41460'}} className="fi flaticon-verified cticon"></i>
                            </div>
                            <div className="p-text">
                                <h3 style={{cursor:'pointer'}} onClick={registerChange}><span data-count="1500">Join Us</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 pb-4">
                        <div className="project floating-item card2">
                            <div className="icon">
                                <i style={{color:'#A41460'}} className="fi flaticon-verified cticon"></i>
                            </div>
                            <div className="p-text">
                                <h3 style={{cursor:'pointer'}} onClick={routeChange}><span data-count="1500">Find Services</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 pb-4">
                        <div className="project floating-item card3">
                            <div className="icon">
                                <i style={{color:'#A41460'}} className="fi flaticon-verified cticon"></i>
                            </div>
                            <div className="p-text">
                                <h3 style={{cursor:'pointer'}} onClick={loginChange}><span data-count="1500">Login</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTop;
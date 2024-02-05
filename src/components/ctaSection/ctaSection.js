import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'; 
import './style.css';

const CtaSection = (props) => {
    const navigate = useNavigate(); 
    
    const handleClick = () => {
       
        navigate('/contact'); 
    };

    return (
        <div className="upper-contact-area">
            <div className="container">
                <div className="contact-grids">
                    <div className="row align-items-center">
                        <div className="col col-lg-6">
                            <h2> INTERESTED IN BECOMING THE <br/>BBC MEMBER</h2>
                        </div>
                        <div className="col col-lg-6">
                            <Button
                                className="details theme-btn"
                                style={{
                                    width: '200px',
                                    backgroundColor: '#A41460',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    color: 'white',
                                    padding: '13px',
                                }}
                                onClick={handleClick}
                            >
                                Contact US
                            </Button>
                        </div>
                    </div>
                    <div className="left-shape"></div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;

import React, { useState } from 'react';
import axios from "axios";
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import {  NotificationManager,} from "react-notifications";
import "./eventregister.scss";

const EventRegister = (props) =>{

    
    const styles = {
        top:{
            marginBottom:'300px'
        },
    };
    const [eventid, setEventId] = useState("");
    const [forms, setForms] = useState({
        event_user_name: '',
        event_user_mobile: '',
        event_user_email: '',
        event_user_area: '',
        event_user_business: '',
        event_user_professional: '',
        event_user_description: ''
    });

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

    const validateOnlyDigits = (inputtxt) => {

        
         var phoneno = /^\d+$/;
         if(inputtxt.match(phoneno) || inputtxt.length==0){
             return true;
               }
             else
               {
               
               return false;
               }
       }

    const onInputChange = (e) => {

        if(e.target.name=="event_user_mobile"){
    
            if(validateOnlyDigits(e.target.value)){
                setForms({
                ...forms,
                [e.target.name]: e.target.value,
                });
            }
            
        } else{
    
            setForms({
            ...forms,
            [e.target.name]: e.target.value,
            });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        
            
        
        axios({
            url: "https://businessboosters.club/public/api/createEventEntry",
            method: "POST",
            params : {
                
                event_user_name: forms.event_user_name,
                event_user_mobile: forms.event_user_mobile,
                event_user_email: forms.event_user_email,
                event_user_area: forms.event_user_area,
                event_user_business: forms.event_user_business,
                event_user_professional: forms.event_user_professional,
                event_user_description: forms.event_user_description,
                   
            },
            
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            if(res.data.code == '200'){
                NotificationManager.success("Data Submitted Sucessfully");
                setEventId(res.data.eventid);
                setForms(
                    {
                        event_user_name: '',
                        event_user_mobile: '',
                        event_user_email: '',
                        event_user_area: '',
                        event_user_business: '',
                        event_user_professional: '',
                        event_user_description: '',
                    }
                );
            
                }else{
                    NotificationManager.warning("Data is not Submitted Sucessfully");
                    setForms(
                        {
                            event_user_name: '',
                            event_user_mobile: '',
                            event_user_email: '',
                            event_user_area: '',
                            event_user_business: '',
                            event_user_professional: '',
                            event_user_description: '',
                        }
                    );
                }
        
        });
        
    };


    return(
        <>
            <Navbar1 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <section className={`formregister wpo-contact-area section-padding ${props.contactclass}`} id="register" style={styles.top}>
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="wpo-section-title">
                                <h2>Event Registration</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="co-lg-12   col-12">
                            <div className="row">
                                <div className="col col-lg-12 col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        {
                                            !eventid &&
                                        
                                        <form>
                                            <div className='row'>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Full Name <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.event_user_name}
                                                            type="text"
                                                            name="event_user_name"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Email <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.event_user_email}
                                                            type="email"
                                                            name="event_user_email"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Mobile No <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.event_user_mobile}
                                                            inputProps={{ maxLength: 10 }}
                                                            type="text"
                                                            name="event_user_mobile"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Area <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.event_user_area}
                                                            type="text"
                                                            name="event_user_area"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Business</label>
                                                        <input
                                                            style={{color:'Black',height:'20px'}}
                                                            value="Yes"
                                                            type="checkbox"
                                                            name="event_user_business"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Professional</label>
                                                        <input
                                                            style={{color:'Black',height:'20px'}}
                                                            value="Yes"
                                                            type="checkbox"
                                                            name="event_user_professional"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col col-lg-12 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Description of Work</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.event_user_description}
                                                            type="text"
                                                            name="event_user_description"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn" onClick={(e) => onSubmit(e)} disabled={isButtonDisabled}>
                                                    Submit Now
                                                </button>
                                            </div>
                                        </form>
                                        }
                                        {
                                            eventid&&
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                        <p>
                                                            Your Event Id is <h1>{eventid}</h1>
                                                        </p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
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
        </section>
            <Footer/>
            <Scrollbar/>
        </>
    )
}
export default EventRegister;
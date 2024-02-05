import React, { useState } from 'react';
import axios from "axios";
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import {  NotificationManager,} from "react-notifications";
import "./register.scss";
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions';
import { useNavigate } from "react-router-dom";

const Login = (props) =>{
    const styles = {
        top:{
            marginBottom:'320px'
        },
    };
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [forms, setForms] = useState({
        mobile: '',
        password: '',
        
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

        if(e.target.name=="mobile"){
    
            if(validateOnlyDigits(e.target.value)){
                setForms({
                ...forms,
                [e.target.name]: e.target.value,
                });
            }
            
        }else{
    
            setForms({
            ...forms,
            [e.target.name]: e.target.value,
            });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        let headers = new Headers();
         headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');
        headers.append('Access-Control-Allow-Origin','origin');
        headers.append('Access-Control-Allow-Origin','*');
        
        axios({
            url: "http://businessboostersclub.online/public/api/userLogin",
            method: "POST",
            params : {
                
                mobile: forms.mobile,
                password: forms.password,
                
            },
            headers: headers,
        }).then((res) => {
            
            if(res.data.code == '200'){
                NotificationManager.success("Login Created Sucessfully");
                setForms(
                    {
                        mobile: '',
                        password: '',
                    }
                );
                const user_id = res.data.data;
                dispatch(setUser(user_id));
                
                let path = `/edit/${user_id}`; 
                navigate(path);
            }else{
                NotificationManager.error("Duplicate Entry");
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
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="co-lg-12   col-12">
                            <div className="row justify-content-center">
                                <div className="col col-lg-6 col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        <form>
                                            <div className='row'>
                                                <div className="col col-lg-12 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>User Name <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.mobile}
                                                            type="text"
                                                            name="mobile"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-12 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Password <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.password}
                                                            type="password"
                                                            name="password"
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
export default Login;
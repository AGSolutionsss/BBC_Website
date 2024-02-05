import React, { useState } from 'react';
import axios from "axios";
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import "./interest.scss";
import { useNavigate } from 'react-router-dom';

const Interest = (props) =>{

    const navigate = useNavigate();
    const styles = {
        top:{
            marginBottom:'300px'
        },
    };
    const [forms, setForms] = useState({
        person_name: '',
        person_mobile: '',
        person_email: '',
        person_occupation: '',
        person_service: '',
        person_company: '',
        person_area: '',
        person_message: '',
        person_join: '',
        
       
    });

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

    const validateOnlyDigits = (inputtxt) => {
        var phoneno = /^\d+$/;
        if(inputtxt.match(phoneno) || inputtxt.length==0){
            return true;
        }else{
            return false;
        }
    }

    const validateOnlyText = (inputtxt) => {
        var re = /^[A-Za-z ]+$/;
        if(inputtxt === "" || re.test(inputtxt)){
          return true;
        }else{
          return false;
        }
    }

    const onInputChange = (e) => {

        if(e.target.name=="person_mobile"){
    
            if(validateOnlyDigits(e.target.value)){
                setForms({
                ...forms,
                [e.target.name]: e.target.value,
                });
            }
            
        }else if(e.target.name=="person_name"){
    
            if(validateOnlyText(e.target.value)){
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
        var v = document.getElementById("addcheck").checkValidity();
        var v = document.getElementById("addcheck").reportValidity();
        if (v) {
        setIsButtonDisabled(true)
        axios({
            url: "https://businessboostersclub.online/public/api/createInterest",
            method: "POST",
            params : {
                
                person_name: forms.person_name,
                person_mobile: forms.person_mobile,
                person_email: forms.person_email,
                person_occupation: forms.person_occupation,
                person_service: forms.person_service,
                person_company: forms.person_company,
                person_area: forms.person_area,
                person_message: forms.person_message,
                person_join: forms.person_join,
                
            },
            
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            
            if(res.data.code == '200'){
                
                setTimeout(() => {
                    navigate('/thankyouu')
                 }, 1)
            
                }else{
                    setTimeout(() => {
                        navigate('/failureu')
                    }, 1)
                }
        
        });
        }
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
                                <h2>Want to Join BBC</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="co-lg-12   col-12">
                            <div className="row">
                                <div className="col col-lg-12 col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        <form id="addcheck">
                                            <div className='row'>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Full Name <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.person_name}
                                                            type="text"
                                                            name="person_name"
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
                                                            value={forms.person_email}
                                                            type="email"
                                                            name="person_email"
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
                                                            maxLength={10}
                                                            minLength={10}
                                                            value={forms.person_mobile}
                                                            inputProps={{ maxLength: 10 }}
                                                            type="text"
                                                            name="person_mobile"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Occupation <span>*</span></label>
                                                        <select name="person_occupation" required style={{color:'Black',paddingLeft:'6px'}} onChange={(e) => onInputChange(e)}>
                                                            <option selected disabled>Select Occupation</option>
                                                            <option value="Business">Business</option>
                                                            <option value="Professional">Professional</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Company </label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.person_company}
                                                            type="text"
                                                            name="person_company"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-4 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Area <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.person_area}
                                                            type="text"
                                                            name="person_area"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col col-lg-6 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Products / Services <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.person_service}
                                                            type="text"
                                                            name="person_service"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                        <small>Please type all Products / Services by comma separated</small>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-6 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Message</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.person_message}
                                                            type="text"
                                                            name="person_message"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-12 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>To learn more about BBC, click here to attend a next meeting</label>
                                                        <input
                                                            style={{color:'Black',height:'20px'}}
                                                            value="Yes"
                                                            type="checkbox"
                                                            name="person_join"
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
export default Interest;
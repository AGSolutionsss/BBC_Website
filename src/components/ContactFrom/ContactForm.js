import React, { useRef, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const navigate = useNavigate();
    const form = useRef(null);
    const [forms, setForms] = useState({
        contact_name: '',
        contact_email: '',
        contact_mobile: '',
        contact_subject: 'Contact',
        contact_message: ''
    });

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

        if(e.target.name=="contact_mobile"){
    
            if(validateOnlyDigits(e.target.value)){
                setForms({
                ...forms,
                [e.target.name]: e.target.value,
                });
            }
            
        }else if(e.target.name=="contact_name"){
    
            if(validateOnlyText(e.target.value)){
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

    const submitHandler = (e) => {
        e.preventDefault();
        var v = document.getElementById("addcheck").checkValidity();
        var v = document.getElementById("addcheck").reportValidity();
        if (v) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin','http://localhost:3000');
            headers.append('Access-Control-Allow-Origin','*');
                axios({
                    url: "http://businessboostersclub.online/public/api/createContact",
                    method: "POST",
                    params : {
                        contact_name: forms.contact_name,
                        contact_email: forms.contact_email,
                        contact_mobile: forms.contact_mobile,
                        contact_subject: 'Contact',
                        contact_message: forms.contact_message,
                    },
                    headers: headers,
                }).then((res) => {
 
                    if(res.data.code == '200'){
                
                        setTimeout(() => {
                            navigate('/thankyouc')
                         }, 1)
                    
                    }else{
                        setTimeout(() => {
                            navigate('/failurec')
                        }, 1)
                    }
                
                });
            
            }
    };

    return (
        <form id="addcheck" ref={form} onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            style={{color:'Black'}}
                            value={forms.contact_name}
                            type="text"
                            name="contact_name"
                            required
                            onChange={(e) => onInputChange(e)}
                            placeholder="Your Name" />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            style={{color:'Black'}}
                            value={forms.contact_mobile}
                            type="text"
                            name="contact_mobile"
                            maxLength={10}
                            minLength={10}
                            required
                            onChange={(e) => onInputChange(e)}
                            placeholder="Your phone" />
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            style={{color:'Black'}}
                            value={forms.contact_email}
                            type="email"
                            name="contact_email"
                            required
                            onChange={(e) => onInputChange(e)}
                            placeholder="Your Email" />
                    </div>
                </div>
                
                <div className="col col-lg-12 col-12">
                    <textarea
                        style={{color:'Black'}}
                        required
                        value={forms.contact_message}
                        onChange={(e) => onInputChange(e)}
                        name="contact_message"
                        placeholder="Message">
                    </textarea>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Submit Now</button>
            </div>
        </form >
    )
}

export default ContactForm;
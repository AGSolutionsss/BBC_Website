import React, { useRef, useState } from 'react';
import { TextField } from '@material-ui/core';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DeleteAccount = (props) => {
  const styles = {
    top: {
      marginBottom: '0px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // Align items to the top
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    contactFormContainer: {
      flex: 1, // Take up remaining space
      marginRight: '20px', // Adjust margin as needed
    },
  };

  const navigate = useNavigate();
    const form = useRef(null);
    const [forms, setForms] = useState({
        contact_name: '',
        contact_email: '',
        contact_mobile: '',
        contact_message: ''
    });

    const validateOnlyDigits = (inputtxt) => {
        var phoneno = /^\d+$/;
        if (inputtxt.match(phoneno) || inputtxt.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    const validateOnlyText = (inputtxt) => {

        var re = /^[A-Za-z ]+$/;
        if (inputtxt === "" || re.test(inputtxt)) {
            return true;
        } else {
            return false;
        }
    }

    const onInputChange = (e) => {

        if (e.target.name == "contact_mobile") {

            if (validateOnlyDigits(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "contact_name") {

            if (validateOnlyText(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else {

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
        headers.append('Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Origin', '*');
        axios({
            url: "http://businessboosters.club/public/api/createDeleteAccount",
            method: "POST",
            params: {
                contact_name: forms.contact_name,
                contact_email: forms.contact_email,
                contact_mobile: forms.contact_mobile,
                contact_message: forms.contact_message,
            },
            headers: headers,
        }).then((res) => {

            if (res.data.code == '200') {

                setTimeout(() => {
                    navigate('/thankyouad')
                }, 1)

            } else {
                setTimeout(() => {
                    navigate('/failuread')
                }, 1)
            }

        });

    }
};

  return (
    <section
      className={`wpo-contact-area section-padding ${props.contactclass}`}
      id="contact"
      style={styles.top}
    >
      <div className="wpo-wpo-contact-form-map">
        <div className="container">
          <div className="row" style={styles.container}>
            <div className="col col-lg-6 col-md-6 col-12" style={styles.contactFormContainer}>
              <div className="wpo-contact-form">
                <h2>Request for Account Deletation</h2>
                <form id="addcheck" ref={form} style={{marginTop:'40px'}} onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="form-field">
                                <TextField
                                    style={{ color: 'Black' }}
                                    fullWidth
                                    value={forms.contact_name}
                                    type="text"
                                    name="contact_name"
                                    required
                                    onChange={(e) => onInputChange(e)}
                                    label="Full Name" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="form-field">
                                <TextField
                                    style={{ color: 'Black' }}
                                    value={forms.contact_mobile}
                                    type="text"
                                    fullWidth
                                    name="contact_mobile"
                                    inputProps={{ minLength: 10, maxLength: 10 } }
                                    required
                                    onChange={(e) => onInputChange(e)}
                                    label="Mobile No" />
                            </div>
                        </div>
                        <div className="col col-lg-12 col-12">
                            <div className="form-field">
                                <TextField
                                    style={{ color: 'Black' }}
                                    fullWidth
                                    value={forms.contact_email}
                                    type="email"
                                    name="contact_email"
                                    required
                                    onChange={(e) => onInputChange(e)}
                                    label="Email Id" />
                            </div>
                        </div>

                        <div className="col col-lg-12 col-12">
                            <TextField
                                style={{ color: 'Black' }}
                                required
                                fullWidth
                                helperText="Tell us, please, why you decided to leave our group"
                                value={forms.contact_message}
                                onChange={(e) => onInputChange(e)}
                                name="contact_message"
                                label="Message">
                            </TextField>
                        </div>
                    </div>
                    <div className="submit-area" style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            className="theme-btn"
                            style={{
                                width: '200px',
                                backgroundColor: '#A41460',
                                borderRadius: '50px',
                                fontWeight: '600',
                                color: 'white',
                                padding: '13px',
                                margin: 'auto',
                                display: 'block',
                            }}
                        >
                            Submit
                        </button>
                    </div>

                </form >
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
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default DeleteAccount;

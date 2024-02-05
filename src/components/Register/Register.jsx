import React, { useState } from 'react';
import axios from "axios";
import Footer from '../footer/Footer';
import "./register.scss";
import { useNavigate } from 'react-router-dom';
import Nav_Bar from '../Nav_Bar';
import Load from '../Load';
import './register.css'
import { TextField,MenuItem } from '@material-ui/core';

const gender = [
    {
        value: "Male",
        label: "Male"
    },
    {
        value: "Female",
        label: "Female"
    },
]

const Register = (props) => {
    const navigate = useNavigate();
    const styles = {
        top: {
            marginBottom: '320px'
        },
    };
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    var todayback = "2008-" + mm + "-" + dd;
    var d = document.getElementById("dob");
    if (d) {
        document.getElementById("dob").setAttribute("max", todayback);
        document.getElementById("spouse_dob").setAttribute("max", todayback);
    }
    const [selectedFile, setSelectedFile] = useState(null);
    const [forms, setForms] = useState({
        name: '',
        gender: '',
        dob: '',
        image: '',
        email: '',
        mobile: '',
        whatsapp_number: '',
        spouse_name: '',
        spouse_dob: '',
        doa: '',
        company: '',
        company_short: '',
        category: '',
        experience: '',
        working_hours: '',
        website: '',
        landline: '',
        address: '',
        product: '',
        area: '',
        profile_tag: ''
    });

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

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

        if (e.target.name == "mobile") {

            if (validateOnlyDigits(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "name") {

            if (validateOnlyText(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "spouse_name") {

            if (validateOnlyText(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "category") {

            if (validateOnlyText(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "whatsapp_number") {

            if (validateOnlyDigits(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "landline") {

            if (validateOnlyDigits(e.target.value)) {
                setForms({
                    ...forms,
                    [e.target.name]: e.target.value,
                });
            }

        } else if (e.target.name == "experience") {

            if (validateOnlyDigits(e.target.value)) {
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

    const onSubmit = (e) => {
        e.preventDefault();
        var v = document.getElementById("addcheck").checkValidity();
        var v = document.getElementById("addcheck").reportValidity();
        if (v) {
            setIsButtonDisabled(true)
            let headers = new Headers();
            const data = new FormData();
            data.append("name", forms.name);
            data.append("gender", forms.gender);
            data.append("dob", forms.dob);
            data.append("image", selectedFile);
            data.append("email", forms.email);
            data.append("mobile", forms.mobile);
            data.append("whatsapp_number", forms.whatsapp_number);
            data.append("spouse_name", forms.spouse_name);
            data.append("spouse_dob", forms.spouse_dob);
            data.append("doa", forms.doa);
            data.append("company", forms.company);
            data.append("company_short", forms.company_short);
            data.append("category", forms.category);
            data.append("experience", forms.experience);
            data.append("working_hours", forms.working_hours);
            data.append("website", forms.website);
            data.append("landline", forms.landline);
            data.append("address", forms.address);
            data.append("product", forms.product);
            data.append("area", forms.profile_tag);
            data.append("area", forms.area);
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin', 'http://localhost:3000');
            headers.append('Access-Control-Allow-Origin', '*');
            axios({
                url: "http://businessboosters.club/public/api/createUser",
                method: "POST",
                data,
                headers: headers,
            }).then((res) => {

                if (res.data.code == '200') {
                    setTimeout(() => {
                        navigate('/thankyou')
                    }, 1)
                } else {
                    setTimeout(() => {
                        navigate('/failure')
                    }, 1)
                }


            });
        }
    };


    return (
        <>
            <Nav_Bar />
            <Load/>
            <section className={`formregister wpo-contact-area section-padding ${props.contactclass}`} id="register" style={styles.top}>
                <div className="wpo-wpo-contact-form-map">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="wpo-section-title">
                                    <h2>Registration</h2>
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
                                                            <TextField
                                                                style={{ color: 'Black' }}
                                                                required
                                                                fullWidth
                                                                label="Full Name"
                                                                value={forms.name}
                                                                type="text"
                                                                name="name"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                style={{ color: 'Black', height: '50px' }}
                                                                required
                                                                fullWidth
                                                                label="Gender"
                                                                value={forms.gender}
                                                                inputProps={{ maxLength: 10 }}
                                                                select
                                                                SelectProps={{
                                                                    MenuProps: {},
                                                                }}
                                                                name="gender"
                                                                onChange={(e) => onInputChange(e)}>
                                                                {
                                                                    gender.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))
                                                                }
                                                            </TextField>
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                fullWidth
                                                                label="Email"
                                                                style={{ color: 'Black' }}
                                                                required
                                                                value={forms.email}
                                                                type="email"
                                                                name="email"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row'>

                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                style={{ color: 'Black' }}
                                                                fullWidth
                                                                label="Mobile No"
                                                                required
                                                                inputProps={{ minLength: 10, maxLength: 10 } }
                                                                value={forms.mobile}
                                                                type="text"
                                                                name="mobile"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                style={{ color: 'Black' }}
                                                                required
                                                                label="What's App"
                                                                fullWidth
                                                                value={forms.whatsapp_number}
                                                                inputProps={{ minLength: 10, maxLength: 10 } }
                                                                type="text"
                                                                name="whatsapp_number"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Profile Image"
                                                                fullWidth
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                  }}
                                                                style={{ color: 'Black' }}
                                                                required
                                                                type="file"
                                                                name="image"
                                                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Date of Birth"
                                                                fullWidth
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                  }}
                                                                style={{ color: 'Black' }}
                                                                required
                                                                max="2018-12-31"
                                                                value={forms.dob}
                                                                type="date"
                                                                name="dob"
                                                                id="dob"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Spouse Name"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                value={forms.spouse_name}
                                                                type="text"
                                                                name="spouse_name"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-4 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                fullWidth
                                                                label="Date of Anniversary"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                  }}
                                                                style={{ color: 'Black' }}
                                                                value={forms.doa}
                                                                type="date"
                                                                name="doa"
                                                                id="doa"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='row'>
                                                    <div className="col col-lg-3 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                fullWidth
                                                                label="Name of the Company"
                                                                style={{ color: 'Black' }}
                                                                value={forms.company}
                                                                type="text"
                                                                name="company"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-3 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Business Category"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                value={forms.category}
                                                                type="text"
                                                                name="category"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-3 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="No of Experiences"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                value={forms.experience}
                                                                inputProps={{ minLength: 1, maxLength: 4 } }
                                                                type="text"
                                                                name="experience"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col col-lg-3 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Website"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                value={forms.website}
                                                                type="text"
                                                                name="website"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col col-lg-3 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Landline Number"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                value={forms.landline}
                                                                inputProps={{ minLength: 12, maxLength: 12 } }
                                                                type="text"
                                                                name="landline"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-6 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Address"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                required
                                                                value={forms.address}
                                                                type="text"
                                                                name="address"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                            <small>Please type Full Address</small>
                                                        </div>
                                                    </div>
                                                    <div className="col col-lg-3 col-12">
                                                        <div className="form-field">
                                                            <TextField
                                                                label="Area"
                                                                fullWidth
                                                                style={{ color: 'Black' }}
                                                                required
                                                                value={forms.area}
                                                                type="text"
                                                                name="area"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className="col col-lg-12 col-12">
                                                            <div className="form-field">
                                                                <TextField
                                                                    label="Products / Services"
                                                                    fullWidth
                                                                    style={{ color: 'Black' }}
                                                                    required
                                                                    value={forms.product}
                                                                    type="text"
                                                                    name="product"
                                                                    onChange={(e) => onInputChange(e)}
                                                                />
                                                                <small>Type all Products or Services separated by comma </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className="col col-lg-12 col-12">
                                                            <div className="form-field">
                                                                <TextField
                                                                    label="Products Tag"
                                                                    fullWidth
                                                                    style={{ color: 'Black' }}
                                                                    value={forms.product}
                                                                    type="text"
                                                                    name="profile_tag"
                                                                    onChange={(e) => onInputChange(e)}
                                                                />
                                                                <small>Type all Products or Services related Tags Separated by comma ( like CCTV can be - Security System, Camera, Surveillance etc. )</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="submit-area">
                                                    <button type="submit" className="theme-btn" onClick={(e) => onSubmit(e)} disabled={isButtonDisabled} style={{ width: '200px', backgroundColor: '#A41460', borderRadius: '50px', fontWeight: '600', color: 'white', padding: '13px' }}>
                                                    Submit
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
            <Footer />
            {/* <Scrollbar /> */}
        </>
    )
}
export default Register;
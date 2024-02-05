import React, { useEffect,useState } from 'react';
import axios from "axios";
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import {  NotificationManager,} from "react-notifications";
import "./register.scss";
import { baseURL,baseURLurimg } from '../../api/api';
import { useSelector } from 'react-redux';

const Edit = (props) =>{
    const styles = {
        top:{
            marginBottom:'320px'
        },
    };
    const user = useSelector((state) => state.user_id);
    const [file, setFile] = useState("");
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
        check_image: ''
    });
    var url = new URL(window.location.href);
    var string = url + '';
    const id = string.split("/").pop();
    let headers = new Headers();
         headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');
        headers.append('Access-Control-Allow-Origin','*');
    useEffect(() => {
        if(!id){
            window.location = "/login";
        }
        axios({
            
            url: baseURL + "/getUserById/"+id,
            method: "GET",
            
        }).then((res) => {
            
            setForms(res.data.profiles);
        });
    }, [id]);
    

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

    const validateOnlyDigits = (inputtxt) => {

        // function phonenumber(inputtxt)
       //{
         var phoneno = /^\d+$/;
         if(inputtxt.match(phoneno) || inputtxt.length==0){
             return true;
               }
             else
               {
               //alert("message");
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
            
        } else if(e.target.name=="whatsapp_number"){
    
            if(validateOnlyDigits(e.target.value)){
                setForms({
                ...forms,
                [e.target.name]: e.target.value,
                });
            }
           
        }else if(e.target.name=="landline"){
    
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

    const onUpdate = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        console.warn(file.name);
        axios({
            url: "http://businessboosters.club/public/api/updateUser",
            method: "PUT",
            params : {
                
                name: forms.name,
                gender: forms.gender,
                dob: forms.dob,
                image: file,
                email: forms.email,
                mobile: forms.mobile,
                whatsapp_number: forms.whatsapp_number,
                spouse_name: forms.spouse_name,
                spouse_dob: forms.spouse_dob,
                doa: forms.doa,
                company: forms.company,
                company_short: forms.company_short,
                category: forms.category,
                experience: forms.experience,
                working_hours: forms.working_hours,
                website: forms.website,
                landline: forms.landline,
                address: forms.address,
                product: forms.product,
                area: forms.area,
                check_image: forms.check_image  
            },
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            NotificationManager.success("Data Updated Sucessfully");
            setForms(
                {
                    
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
                    check_image: ''
                }
            );
        
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
                                <h2>Edit Registration</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="co-lg-12   col-12">
                            <div className="row">
                                <div className="col col-lg-12 col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        <form>
                                            <div className='row'>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Full Name <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.name}
                                                            type="text"
                                                            name="name"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Gender <span>*</span></label>
                                                        <select name="gender" required style={{color:'Black'}} onChange={(e) => onInputChange(e)}>
                                                            <option selected disabled>Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Date of Birth <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.dob}
                                                            type="date"
                                                            name="dob"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-2 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Profile Image</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            type="file"
                                                            name="image"
                                                            onChange={(e) => setFile(e.target.files[0])}
                                                        />
                                                        <input
                                                            style={{color:'Black'}}
                                                            hidden
                                                            value={forms.image}
                                                            name="check_image"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-1 col-12">
                                                    <div className="form-field">
                                                        <img src={(baseURLurimg+forms.image.length  == 0 ? 'http://businessboosters.club/public/images/user_images/no_images.png' : baseURLurimg+forms.image)}
                                                        alt={forms.name}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Email <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.email}
                                                            type="email"
                                                            name="email"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Mobile No <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.mobile}
                                                            inputProps={{ maxLength: 10 }}
                                                            type="text"
                                                            name="mobile"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>What's App <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.whatsapp_number}
                                                            inputProps={{ maxLength: 10 }}
                                                            type="text"
                                                            name="whatsapp_number"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Spouse Name</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.spouse_name}
                                                            type="text"
                                                            name="spouse_name"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Spouse DOB</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.spouse_dob}
                                                            type="date"
                                                            name="spouse_dob"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Date of Anniversary</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.doa}
                                                            type="date"
                                                            name="doa"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Name of the Company<span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.company}
                                                            type="text"
                                                            name="company"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Company Short Name<span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.company_short}
                                                            type="text"
                                                            name="company_short"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Business Category<span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.category}
                                                            type="text"
                                                            name="category"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Experience<span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.experience}
                                                            type="text"
                                                            name="experience"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Working Hours <span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.working_hours}
                                                            type="text"
                                                            name="working_hours"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Website</label>
                                                        <input
                                                            style={{color:'Black'}}
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
                                                        <label className='label'>Landline Number</label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            value={forms.landline}
                                                            inputProps={{ maxLength: 12 }}
                                                            type="text"
                                                            name="landline"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-6 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Address<span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
                                                            required
                                                            value={forms.address}
                                                            type="text"
                                                            name="address"
                                                            onChange={(e) => onInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col col-lg-3 col-12">
                                                    <div className="form-field">
                                                        <label className='label'>Area<span>*</span></label>
                                                        <input
                                                            style={{color:'Black'}}
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
                                                            <label className='label'>Products / Services<span>*</span></label>
                                                            <input
                                                                style={{color:'Black'}}
                                                                required
                                                                value={forms.product}
                                                                type="text"
                                                                name="product"
                                                                onChange={(e) => onInputChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn" onClick={(e) => onUpdate(e)} disabled={isButtonDisabled}>
                                                    Update Now
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
export default Edit;
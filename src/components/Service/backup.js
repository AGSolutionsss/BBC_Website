import React, { useEffect, useState } from "react";
import { baseURL,baseURLurimg } from '../../api/api';
import axios from "axios";
import { Link } from 'react-router-dom';
import ProfileModel from '../Service/ProfileModel';
import EntryModel from "./EntryModel";
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import './Service.css';

const Service = (props) => {
    const [user, setUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        axios({
            url: baseURL + "/getUser",
            method: "GET",

        }).then((res) => {
            setUser(res.data.profile);
        });
    }, []);
    
    

    const [open, setOpen] = React.useState(false);
    const [opens, setOpens] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    function handleCloses() {
        setOpens(false);
    }

    const [state, setState] = useState({});

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
        
    }

    const handleClickOpens = () => {
        
        setOpens(true);
        
        
    }

    const  onChangeHandle = (e) => {
        setSearchTerm(e.target.value)
    }
 
    return (
        <>
        <Navbar1 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
        <div className="wpo-work-area-s2 section-padding" style={{paddingBottom:'380px'}}>
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <h2>Our Awesome Partners</h2>
                            <p>A mentor is an individual with expertise who can help develop the career of a mentee. Meet our Mentors.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row" style={{paddingBottom:'30px'}}>
                <input
                    className="form-control"
                    type="text"
                    name="textsearch"
                   
                    onChange={(e) => onChangeHandle(e)}
                    placeholder="Search" />
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {user.filter((users) => {
                            if(!searchTerm){
                                return users 
                            }else if(users.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return users
                            }else if(users.company.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return users
                            }else if(users.occupation.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return users
                            }else if(users.category.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return users
                            }else if(users.area.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return users
                            }
                        }).map((users, exp) => (

                            <div className="col-lg-4 col-md-6 col-12" key={exp} >
                                <div className="card card-profile">
                                    <div className="card-image">
                                    <img className="img img-raised" src={baseURLurimg+users.image}/> 
                                        
                                    </div>
                                    <div>
                                        <div className="card-caption"> {users.name} </div>
                                    </div>
                                    <div>
                                        <h6 className="category text-infos">{users.company}</h6>
                                    </div>  
                                    <div>
                                        <h4 className="card-captions">{users.category}</h4>
                                    </div>  
                                    
                                    <div className="table">
                                        <p className="card-description"> {users.occupation}</p>

                                        {users.details_view === 1 && (
                                            
                                            
                                                <Link style={{color:'cadetblue'}} to={`/${users.company_short}`}  >
                                                <small style={{fontSize:'10px', float:'right'}}>View More</small>
                                                <small style={{fontSize:'10px', float:'left'}}>{users.area}</small>
                                                </Link>
                                            
                                        )}

                                        {users.details_view === 0 && (
                                                    
                                                        <Link  style={{color:'cadetblue'}} variant="primary" id={users.id} onClick={(e) =>handleClickOpen(users)}>
                                                        <small style={{fontSize:'10px', float:'right'}}>View More</small>
                                                        <small style={{fontSize:'10px', float:'left'}}>{users.area}</small>
                                                        </Link>
                                                    
                                                )}
                                            
                                </div>
                            </div>
                        </div>
                        ))}
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
            {open && 
                <>
                <ProfileModel open={open} onClose={handleClose}  id={state.id} />
                </>
            }
            {opens && 
                <>
                    <EntryModel open={opens} onClose={handleCloses} />
                </>
            }
        </div>
        <Footer/>
        <Scrollbar/>
        </>
    )
}
export default Service;
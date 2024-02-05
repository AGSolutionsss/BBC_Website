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
import CircularProgress from '@material-ui/core/CircularProgress';

const buttonStyle = {
    fontSize: "15px",
    position:'absolute',
    top:'12px',
    right:'10px',
}

const cardbottom = {
    backgroundColor:'rgb(29, 87, 181)',
    width:'103%',
    borderRadius:'.3rem .0rem .0rem .3rem !important',
    marginLeft: '16px'
}

const cardTitleName = {
    display:'flex',
    flexDirection: 'column',
    height:'60px'
}

const style = {
    root: {
      background: 'trasparent',
      borderRadius: 3,
      border: 0,
      color: 'white',
  
    },
    copyContainer: {
      border: '1px solid trasparent',
      background: 'trasparent'
    },
    title: {
      color: 'aquamarine',
      fontStyle: 'italic'
    }
  };

const Service = (props) => {
    const [user, setUser] = useState([]);
    const [suggestion, setSuggestion] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loader, setLoader]= useState(true);
    
    useEffect(() => {
        axios({
            url: baseURL + "/getUser",
            method: "GET",

        }).then((res) => {
            setUser(res.data.profile);
            setSuggestion(res.data.profile);
            setLoader(false);
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
                        </div>
                    </div>
                </div>
                
                <div className="row textsearchbox" style={{paddingBottom:'30px'}}>
                <input
                    className="form-control textsearch"
                    type="text"
                    name="textsearch"
                   value = {searchTerm}
                    onChange={(e) => onChangeHandle(e)}
                    list='suggestion'
                    placeholder="Type to Search...." />
                    <datalist id='suggestion'>
                        {
                            suggestion.map((sug,key) => (
                                <option key={key} value={sug.name}>{sug.name}</option>
                            ))
                        }
                    </datalist>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                    { loader && <CircularProgress disableShrink style={{marginLeft:"600px", marginTop:"300px", marginBottom:"300px"}} color="secondary" />}
                    {!loader && 
                    <>
                        {user.filter((users) => {
                            if(!searchTerm){
                                return users 
                            }else if(users.profile_mix.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return users
                            }
                        }).map((users, exp) => (
                            <div className="col-lg-4 mobile-card" key={exp}>
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="row no-gutters">
                                        <div className="col-md-3 col-3 pro-pic" style={{backgroundImage:`url(${users.image  === null || users.image === '' ? 'http://businessboostersclub.online/public/images/user_images/no_images.png' : baseURLurimg+users.image})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                                        </div>
                                        <div className="col-md-9 col-9 bg-white">
                                            <div>
                                                <h5 class="mt-4 font-weight-medium mb-0" style={{fontSize:'18px',lineHeight:'1.3',fontFamily:'"Inter", sans-serif'}}>{users.name}</h5>
                                                <h6 class="subtitle mb-3" style={{color:'#8d97ad',lineHeight:'1.3',fontSize:'13px',fontFamily:'"Inter", sans-serif'}}>{users.company}</h6>
                                                <p style={{fontFamily:'"Inter", sans-serif',height:'35px',lineHeight:'1.3',fontSize:'14px'}}>{users.occupation}</p>
                                                <ul class="list-inline" style={{marginBottom:'10px'}}>
                                                    {users.details_view === 1 && (
                                                        <li class="list-inline-item"><a href={`/${users.company_short}`} target="_blank" class="text-decoration-none d-block theme-btn-icon"  style={{color:'#8d97ad',transition:'0.1s ease-in'}}><i class="fa fa-eye"></i> &nbsp;View</a></li>
                                                    )}
                                                    {users.details_view === 0 && (
                                                        <li class="list-inline-item"><a id={users.id} onClick={(e) =>handleClickOpen(users)} class="text-decoration-none d-block theme-btn-icon" style={{color:'#8d97ad',transition:'0.1s ease-in',cursor:'pointer'}}><i class="fa fa-eye"></i> &nbsp;View</a></li>
                                                    )}
                                                    <li class="list-inline-item"><a href={"https://api.whatsapp.com/send/?text="+users.name+" "+users.mobile+" "+users.company+" "+users.occupation} target="_blank" class="text-decoration-none d-block theme-btn-icon" style={{color:'#8d97ad',transition:'0.1s ease-in'}}><i class="fa fa-share-alt"></i> &nbsp;Share</a></li>
                                                    <li class="list-inline-item"><i style={{color:'rgb(164, 20, 96)'}} class="fa fa-map-marker" title={users.area}></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </>}
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
import React, { useEffect, useState,Fragment } from 'react';
import { baseURL,baseURLurimg } from '../../api/api';
import axios from "axios";
import { Dialog, Grid, } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './style.css'
import Scrollbar from '../scrollbar/scrollbar';

const ProfileModel = ({ maxWidth, open, onClose, id}) => {

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const [useres, setUseres] = useState([]);
    const [product, setProduct] = useState([]);
    
        useEffect(() => {
            axios({
                url: baseURL + "/getUserById/"+id,
                method: "GET",
    
            }).then((res) => {
                
                setUseres(res.data.profiles);
                setProduct(res.data.profiles.product);
            });
    }, [id]);
    
    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <i className="fa fa-close"></i>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={onClose}>
                {useres.name}
                </DialogTitle>
                <Grid className="modalBody modal-body">

                    <div className="wpo-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-service-single-item">
                                            <div className='row'>
                                                <div className='col-md-8'>
                                                    <h3 className='model_companyname'>{useres.company}</h3>
                                                    <p className='model_address'>{useres.address}</p>
                                                </div>
                                                <div className='col-md-4' style={{textAlign:'center'}}>
                                                    <img className="profileimg" src={(useres.image  === null || useres.image === '' ? 'http://businessboosters.club/public/images/user_images/no_images.png' : baseURLurimg+useres.image)} alt="" />
                                                    
                                                </div>
                                            </div>
                                            <div className='row'>
            <Scrollbar/>
                                                <div className="wpo-service-single-item list-widget">
                                                    <div className="wpo-service-single-title">
                                                        <h3 className='model_category'>Occupation</h3>
                                                    </div>
                                                    <p className='model_catg_lists'>{useres.occupation}</p>
                                                    <div className="wpo-service-single-title">
                                                        <h3 className='model_category'>Product & Services</h3>
                                                    </div>
                                                </div>
                                            </div>   
                                            <div className="wpo-service-single-item list-widget">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <ul>
                                                            {String(product).split(',').map((str,index) => 
                                                            (index % 2 == 0 ? <li>{str}</li>: '')
                                                            )}
                                                            
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <ul>
                                                            {String(product).split(',').map((str,index) => 
                                                            (index % 2 != 0 ? <li>{str}</li>: '')
                                                            )}
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-service-single-item list-widget"></div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3 className='model_contact'>Contact Us</h3>
                                            </div>
                                            
                                            <div className="wpo-service-area">
                                                <div className="row  mt-4">
                                                    <div className="col-lg-4 col-md-12 col-4" style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
                                                        <div className="info-item" style={{padding:'5px 20px',width:'100%'}}>
                                                            <div className="info-wrap" style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center",padding:"3px"}}>
                                                            <div className="info-icon" style={{boxShadow:'none'}}>
                                                                    <a style={{color: '#888888'}} href={"tel:"+useres.mobile}><i className="fa fa-phone callicon" style={{color:'#dfca08'}}></i></a>
                                                                </div>
                                                                <div className="info-text model-desktop" style={{paddingLeft:'20px'}}>
                                                                    <span style={{fontSize:'15px'}}><a style={{color: '#888888'}} href={"tel:"+useres.mobile}>{useres.mobile}</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12 col-4" style={{display:'flex',flexDirection:'column'}}>
                                                        <div className="info-item" style={{padding:'5px 20px',width:'100%'}}>
                                                            <div className="info-wrap" style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center",padding:'3px'}}>
                                                                <div className="info-icon" style={{boxShadow:'none'}}>
                                                                    <a style={{color: '#888888'}} href={"mailto:"+useres.email}><i className="fa fa-envelope mailicon" style={{color:'#dfca08'}}></i></a>
                                                                </div>
                                                                <div className="info-text model-desktop" style={{paddingLeft:'20px'}}>
                                                                    <span style={{fontSize:'15px'}}><a style={{color: '#888888'}} href={"mailto:"+useres.email}>{useres.email}</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12 col-4" style={{display:'flex',flexDirection:'column'}}>
                                                        <div className="info-item" style={{padding:'5px 20px',width:'100%'}}>
                                                            <div className="info-wrap" style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center",padding:'3px'}}>
                                                                <div className="info-icon" style={{boxShadow:'none'}}>
                                                                    <a style={{color: '#888888'}} href={"https://wa.me/+91"+useres.mobile}><i className="fa fa-whatsapp whatsappicon" style={{color:'#dfca08'}}></i></a>
                                                                </div>
                                                                <div className="info-text model-desktop" style={{paddingLeft:'40px'}}>
                                                                    <span style={{fontSize:'15px'}}><a style={{color: '#888888'}} href={"https://wa.me/+91"+useres.mobile}>{useres.mobile}</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ProfileModel


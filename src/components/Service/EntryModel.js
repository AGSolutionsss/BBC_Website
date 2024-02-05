import React, { useRef, useState, Fragment } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { NotificationManager, } from "react-notifications";
import axios from "axios";
import { Dialog, Grid, } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './Entry.css';

const EntryModel = ({ maxWidth, open, onClose }) => {

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

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    const form = useRef(null);
    const [forms, setForms] = useState({

        contact_name: '',
        contact_email: '',
        contact_mobile: '',
        contact_subject: 'Entry Popup',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            axios({
                url: "http://businessboosters.club/public/api/createPopupEntry",
                method: "POST",
                params: {

                    contact_name: forms.contact_name,
                    contact_email: forms.contact_email,
                    contact_mobile: forms.contact_mobile,
                    contact_subject: 'Entry Popup',

                },
                headers: { 'Content-Type': 'application/json' },

            }).then((res) => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                NotificationManager.success("Created Sucessfully");
                setForms(
                    {

                        contact_name: '',
                        contact_email: '',
                        contact_mobile: '',
                        contact_subject: '',

                    }
                );
                <Dialog onClose={onClose} />
                localStorage.setItem('dataKey', JSON.stringify(makeid()));

            });



            //navigate('/services', {replace: true});

        } else {
            validator.showMessages();
        }
    };

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

                </DialogTitle>
                <Grid className="modalBody modal-body">
                    <div className="wpo-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <form ref={form} onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                        <div className="row">
                                            <div className="col col-lg-6 col-12 pb-4">
                                                <div className="form-field">
                                                    <input
                                                        style={{ color: 'Black' }}
                                                        value={forms.contact_name}
                                                        type="text"
                                                        name="contact_name"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        placeholder="Your Name" />
                                                    {validator.message('contact_name', forms.contact_name, 'required|alpha_space')}
                                                </div>
                                            </div>
                                            <div className="col col-lg-6 col-12 pb-4">
                                                <div className="form-field">
                                                    <input
                                                        style={{ color: 'Black' }}
                                                        value={forms.contact_mobile}
                                                        type="phone"
                                                        name="contact_mobile"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        placeholder="Your phone" />
                                                    {validator.message('contact_mobile', forms.contact_mobile, 'required|phone')}
                                                </div>
                                            </div>
                                            <div className="col col-lg-12 col-12 pb-4">
                                                <div className="form-field">
                                                    <input
                                                        style={{ color: 'Black' }}
                                                        value={forms.contact_email}
                                                        type="email"
                                                        name="contact_email"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        placeholder="Your Email" />
                                                    {validator.message('contact_email', forms.contact_email, 'required|email')}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="submit-area pt-4">
                                        <button type="submit" className="theme-btn">Submit Now</button>
                                    </div> */}
                                        <div className="submit-area pt-4" style={{ textAlign: 'center' }}>
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
                                                Submit Now
                                            </button>
                                        </div>

                                    </form >
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default EntryModel


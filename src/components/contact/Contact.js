import React from 'react'
import shape1 from '../../images/about/shape1.png'
import Navbar1 from '../../components/Navbar/Navbar1';
import shape2 from '../../images/about/shape2.png'
import Footer from '../footer/Footer';
import Scrollbar from '../scrollbar/scrollbar';
import ContactArea from '../../components/ContactArea';

const Contact = (props) => {

    return (
        <>
        <Navbar1 hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
        <ContactArea/>
        <Footer/>
        <Scrollbar/>
        </>
    )
}

export default Contact;
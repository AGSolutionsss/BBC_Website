import React, {Fragment} from 'react';
import About2 from '../../components/about2/about2';
import Footer from '../../components/footer/Footer';
import Hero2 from '../../components/hero2/hero2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Floating from '../../components/floating/floating.js';
import Testimonial from '../../components/Testimonial/Testimonial';
import CardTop2 from '../../components/cardtop2/CardTop2';
import Member from '../../components/Member/Member';
import WhyUs from '../../components/WhyUs/WhyUs';
import FollowUs from '../../components/FollowUs/FollowUs';
import Nav_Bar from '../../components/Nav_Bar';

const HomePage =() => {
    return(
        <Fragment>
            <Nav_Bar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>  
            <Hero2 heroClass={'style-2'}/>
            <CardTop2/>
            <About2/>
            <Member/>
            <WhyUs/>
            <FollowUs/>
            <Testimonial/>
            <Footer/>
            <Floating/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;
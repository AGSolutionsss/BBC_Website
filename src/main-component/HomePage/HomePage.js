import React, {Fragment} from 'react';
import About2 from '../../components/about2/about2';
import Footer from '../../components/footer/Footer';
import Hero2 from '../../components/hero2/hero2';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Floating from '../../components/floating/floating';
import Testimonial from '../../components/Testimonial/Testimonial';
import CardTop2 from '../../components/cardtop2/CardTop2';
import about from '../../images/about.jpg'
import Member from '../../components/Member/Member';
import WhyUs from '../../components/WhyUs/WhyUs';
import FollowUs from '../../components/FollowUs/FollowUs';

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <Hero2 heroClass={'style-2'}/>
            <CardTop2/>
            <About2 about={about}/>
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
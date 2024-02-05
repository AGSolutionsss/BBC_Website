import React, { useEffect, useState } from "react";
import { Link} from 'react-scroll'
import { baseURL,baseURLimg } from '../../api/api';
import axios from "axios";
import ProfileAbout from './ProfileAbout';
import ProfileProduct from './ProfileProduct';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ProfileContactArea from './ProfileContactArea';

const Profile = (props) => {
    var url = new URL(window.location.href);
    var string = url + '';
    const short = string.split("/").pop();
    const [user, setUser] = useState([]);

    const [productimages, setProductImages] = useState([]);

    useEffect(() => {
        axios({
            url: baseURL + "/getUserByShort/"+short,
            method: "GET",

        }).then((res) => {
            
            setUser(res.data.profiles);
            setProductImages(res.data.productimages);
        });
    }, [short]);

    return (
        <>
            {user.map((users, exp) => (
                <>
                    <ProfileAbout name={users.name} image={users.image} category={users.category} about={productimages.product_about_us} product={users.product} experience={users.experience}/>
                    <ProfileProduct productimages={productimages}/>
                    <ProfileContactArea mobile={users.mobile} email={users.email} address={users.address}/>
                    <Scrollbar/>
                    
                </>
            ))}
                
        </>
    )
}

export default Profile;
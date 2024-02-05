import React, { useState } from 'react';
import ListItem from "@material-ui/core/List";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: 'home',
    },
    {
        id: 2,
        title: 'About Us',
        link: 'about',
    },
    {
        id: 3,
        title: 'Services',
        link: 'services',
    },
    {
        id: 4,
        title: 'Gallery',
        link: 'gallery',
    },
    {
        id: 5,
        title: 'Contact Us',
        link: 'contact',
    },

]


const MobileMenu1 = () => {

    const [menuActive, setMenuState] = useState(false);

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem key={mn}>
                                <a href={item.link} >{item.title}</a>
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu1;
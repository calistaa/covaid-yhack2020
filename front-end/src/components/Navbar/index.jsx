import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

const Navbar = props => {
    return (
        <nav classname = "map-nav-bar">
            <NavLink to = "/">
                <p> about </p>
            </NavLink>
            <NavLink to = "/">
                <p> organizations </p>
            </NavLink>
            <NavLink to = "/">
                <p> faq </p>
            </NavLink>
            <div className = "modal" onclick = {props.viewBuildings}>
                <p>Sign Up/Sign In</p>
            </div>
        </nav>
    );
}
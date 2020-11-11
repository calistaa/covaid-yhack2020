import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

const Navbar = props => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home"> Helping Hands</a>
                </Navbar.Brand>
            </Navbar.Header>
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
            <div className = "modal" onclick = {props.SignUp}>
                <p>Sign Up/Sign In!</p>
            </div>
        </nav>
        </Navbar>
    );
}
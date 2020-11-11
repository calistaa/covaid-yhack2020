import React from 'react';

import Button from '../Button';

import './style.less';

const HomePage = () => {
    return (
        <div className = "homepage">
            <div className = "content">
                <h1> Welcome To Helping Hands!</h1>
                <h2> I am a: </h2>
            </div>
            <NavLink activeClassName = "selected" to = "/ibegin">
                <Button color = '#BFCC94' size = '25px' width = '288px'>
                    Volunteer
                </Button>
            </NavLink>

            <NavLink activeClassName = "selected" to = "/ibegin">
                <Button color = '#BFCC94' size = '25px' width = '288px'>
                    Organization
                </Button>
            </NavLink>
        </div>
    )
}

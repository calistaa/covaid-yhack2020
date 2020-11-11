import React from 'react';

import Button from '../Button';

import floating from 'my-app/public/left_man.svg';

import './style.less';

const homepage = () => {
    return (
        <div classname="homepage">
            <div classname = "content">
                <h1> Helping Hands </h1>
                <div classname = "subcontent">
                    <h2> Hello, welcome to our community! </h2>
                    <h3> I am a: </h3>
                </div>
                <NavLink activeClassname = "selected" to="/ibegin">
                    <Button color = '#BFCC94' size = '25px' width='200px'>
                        Volunteer
                    </Button>
                </NavLink>

                <NavLink activeClassname = "selected" to="/ibegin">
                    <Button color = '#BFCC94' size = '25px' width='200px'>
                        Organization
                    </Button>
                </NavLink>
                <div className="floatingPerson">
                    <img src={floating} alt="floating"/>
                </div>
            </div>
        </div>
    )
}

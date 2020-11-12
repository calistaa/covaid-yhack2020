import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import './style.less';

const ProfilePage = (props) => {
    const {user} = useContext(userContext);
    //available fields: id, name, email, zipcode, preferences
    return (
        <div>
            Profile Page 
            <div> Name: {user.name} </div>
        </div>
    );
};

export default ProfilePage
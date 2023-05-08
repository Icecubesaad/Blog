import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Function/AppContext';
import { useContext } from 'react';
const SignedINn = () => {
    const context = useContext(AppContext);
    const {userinfo} = context;
    return (
        <div className='flex-header' style={{display:"flex"}}>
            <div>{userinfo.UserName}</div>
            <div>profile</div>
        </div>
    );
}

export default SignedINn;

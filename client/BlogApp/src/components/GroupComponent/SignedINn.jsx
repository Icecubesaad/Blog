import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Function/AppContext';
import { useContext } from 'react';
const SignedINn = () => {
    const context = useContext(AppContext);
    const {userinfo} = context;
    return (
        <div className='flex-header' style={{display:"flex",alignItems:"center"}}>
            <div style={{marginRight:"20px"}}>{userinfo.UserName}</div>
            <div style={{width:"50px",height:"50px", backgroundColor:"grey", borderRadius:"50%"}}></div>
        </div>
    );
}

export default SignedINn;

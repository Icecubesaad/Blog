import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Function/AppContext';
import { useContext,useState } from 'react';
const SignedINn = (props) => {
    const context = useContext(AppContext);
    const {userinfo} = context;
    return (
        <>
        <div className='flex-header' style={{display:"flex",alignItems:"center"}}>
            <div style={{marginRight:"20px"}}>{userinfo.UserName}</div>
            <div onClick={props.visible}  style={{width:"50px",height:"50px", backgroundColor:"grey", borderRadius:"50%",cursor:"pointer"}}>
               {userinfo.Image ? <img src={userinfo.Image} style={{width:"50px",height:"50px", backgroundColor:"grey", borderRadius:"50%"}} /> : null}
            </div>
        </div>
            
                </>
    );
}

export default SignedINn;

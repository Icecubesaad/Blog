import React from 'react';
import Header from './Header';
import Carrousal from './SideComponent/Carrousal';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppContext from './Function/AppContext';

const Homepage = ({children}) => {
    const context= useContext(AppContext)
    const {getUser,setloggedIN} = context
    useEffect(() => {
        if(localStorage.getItem("key")){
            getUser()
            setloggedIN(true)
        }
        else{
            setloggedIN(false)
        }
    }, []);

    
    return (
        <div>
            <Header/>
            <Carrousal/>
            {children}
        </div>
    );
}

export default Homepage;

import React from 'react';
import Header from './Header';
import Carrousal from './Carrousal';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppContext from './Function/AppContext';

const Homepage = ({children}) => {
    const context= useContext(AppContext)
    const {getUser} = context
    useEffect(() => {
        if(localStorage.getItem("key")){

            getUser()
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

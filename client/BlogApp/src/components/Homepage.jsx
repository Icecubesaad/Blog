import React from 'react';
import Header from './Header';
import Carrousal from './Carrousal';
import Blogs from './Blogs';

const Homepage = ({children}) => {
    return (
        <div>
            <Header/>
            <Carrousal/>
            {children}
        </div>
    );
}

export default Homepage;

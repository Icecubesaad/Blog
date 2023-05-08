import React from 'react';
import { Link } from 'react-router-dom';
const NotSignedIn = () => {
    return (
        <div>
             <Link to="/signin"><button className='btn btn-dark' style={{height:"50px"}}>sign in</button></Link>
          <Link to="/signup"><button className='btn btn-dark'style={{height:"50px"}}>sign up</button></Link>
        </div>
    );
}

export default NotSignedIn;

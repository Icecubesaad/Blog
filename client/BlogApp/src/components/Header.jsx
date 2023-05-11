import React from 'react';
import { Link } from 'react-router-dom';
import NotSignedIn from './GroupComponent/NotSignedIn';
import SignedINn from './GroupComponent/SignedINn';
import AppContext from './Function/AppContext';
import { useContext } from 'react';
import { useState } from 'react';
import Popup from './popup';
const Header = () => {
  const context = useContext(AppContext);
  const {loggedIN} = context;
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    console.log("Hekki")
    setSearchVisible(true);
  };
  const closeSearchBox = () => {
    setSearchVisible(false);
  }
  return (
    <div className='Navbar'>
      <div style={{display:"flex", gap:"30px",alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
        <div className='LOGO' style={{paddingLeft
          :"20px"}}>ICECUBE BLOG</div>
        <div className='Search' onClick={toggleSearch}>
        <input style={{width:"200px"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        </div>
        <div className='Btn-Auth' style={{display:"flex",gap:"50px",alignSelf:"center",paddingRight:"20px"}}>
          { !loggedIN ?  <NotSignedIn/> :
          <SignedINn/> }
          <Link to="/BlogsCreate"><button className='btn btn-dark'style={{height:"50px"}}>+ create</button></Link>
        </div>
        {searchVisible ? <Popup closeSearchBox={closeSearchBox} /> : null}
    </div>
    
  );
}

export default Header;


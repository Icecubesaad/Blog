import React from 'react';
import { Link } from 'react-router-dom';
import NotSignedIn from './GroupComponent/NotSignedIn';
import SignedINn from './GroupComponent/SignedINn';
import AppContext from './Function/AppContext';
import { useContext } from 'react';
import { useState } from 'react';
import Popup from './popup';
const Header = () => {
  const logout = ()=>{
    window.localStorage.clear()
  }
  const [profileStyle, setProfileStyle] = useState({color: "black"});
  const [logoutStyle, setLogoutStyle] = useState({color: "black", marginTop:"10px"});

  const handleProfileMouseEnter = () => {
    setProfileStyle({color: "white"});
  };

  const handleProfileMouseLeave = () => {
    setProfileStyle({color: "black"});
  };

  const handleLogoutMouseEnter = () => {
    setLogoutStyle({color: "white", marginTop:"10px"});
  };

  const handleLogoutMouseLeave = () => {
    setLogoutStyle({color: "black", marginTop:"10px"});
  };
  const [show, setshow] = useState(false);
  const visiblity = ()=>{
    setshow(!show)
  }
  const [style, setstyle] = useState({
    style:{
      height:"50px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"100px",transition:"all 300ms"
    },
    listyle : {textDecoration:"none", color:"black"}
  });
  const change= ()=>{
    setstyle({
        style:{
            height:"50px",backgroundColor:"white",border:"2px solid white", color:"black", borderRadius:"7px", width:"100px",transition:"all 300ms"
        }
    },{

    })
}
const changeAgain = ()=>{
    setstyle({
        style:{
            height:"50px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"100px",transition:"all 300ms"
        }
    })
}
  const context = useContext(AppContext);
  const {loggedIN} = context;
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
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
        <div className='Btn-Auth' style={{display:"flex",gap:"30px",alignSelf:"center",paddingRight:"20px"}}>
          { !loggedIN ?  <NotSignedIn/> :
          <div style={{display:"flex",flexDirection:"column"}}><SignedINn visible = {visiblity}/>{ show ? <div style={{width:"150px", height:"80px", backgroundColor:"grey",zIndex:"9999",position:"absolute", top:"60px",border:"none",borderRadius:"11px",transition:"300ms",paddingTop:"10px"}}>
          <ul style={{listStyle:"none",paddingLeft:"10px"}}>
              <Link style={{textDecoration:"none"}}  onMouseEnter={handleProfileMouseEnter}
            onMouseLeave={handleProfileMouseLeave}><li style={profileStyle} >Profile</li></Link>
              <Link to="/signin" style={{textDecoration:"none"}} onMouseEnter={handleLogoutMouseEnter}
            onMouseLeave={handleLogoutMouseLeave} ><li onClick={logout} style={logoutStyle}>Logout</li></Link>
          </ul>
          </div> : null}</div> }
          <Link to="/BlogsCreate"><button onMouseOver={change} onMouseLeave={changeAgain} style={style.style}>+ create</button></Link>
        </div>
        {searchVisible ? <Popup closeSearchBox={closeSearchBox} /> : null}
    </div>
    
  );
}

export default Header;


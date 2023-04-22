import React from 'react';

const Header = () => {
  return (
    <div className='Navbar'>
      <div style={{display:"flex", gap:"30px",alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
        <div className='LOGO' style={{paddingLeft
          :"20px"}}>ICECUBE BLOG</div>
        <div className='Search'>
        <input style={{width:"200px"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        </div>
        <div className='Btn-Auth' style={{display:"flex",gap:"50px",alignSelf:"center",paddingRight:"20px"}}>
          <button className='btn btn-dark' style={{height:"50px"}}>sign in</button>
          <button className='btn btn-dark'style={{height:"50px"}}>sign in</button>
        </div>
    </div>
  );
}

export default Header;


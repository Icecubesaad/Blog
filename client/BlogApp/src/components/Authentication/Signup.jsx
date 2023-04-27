import React from 'react';
import { useState } from 'react';
const Signup = (props) => {
  const [SignUpCredentials,setSignUpCredentials] = useState({
    "email":"",
    "password":"",
    "name":""
  });
  const ONchange = (e)=>{
    const name = e.target.name;
    const value  = e.target.value;
    setSignUpCredentials({...SignUpCredentials,[name]:value})
    console.log(SignUpCredentials)
  }
  const Register = async()=>{
    const {name,email,password} = SignUpCredentials
    const data = await fetch("/api/auth/Signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify({
        name,email,password
      })
    })
    const parsed =await data.json()
  }
  return (

    <div class="signup-form">
      <div class="title" id='signup'>Signup</div>
      <div class="input-boxes">
        <div class="input-box">
          <i class="fas fa-user"></i>
          <input type="text" name='name' onChange={ONchange} value={SignUpCredentials.name} placeholder="Enter your name" required />
        </div>
        <div class="input-box">
          <i class="fas fa-envelope"></i>
          <input type="text"  name='email' onChange={ONchange} value={SignUpCredentials.email} placeholder="Enter your email" required />
        </div>
        <div class="input-box">
          <i class="fas fa-lock"></i>
          <input type="password" name='password' onChange={ONchange} value={SignUpCredentials.password} placeholder="Enter your password" required />
        </div>
        <div class="button input-box" onClick={Register}>
          <input style={{textAlign:"center"}} value="Signup"/>
        </div>
        <div class="text sign-up-text">Already have an account? <label for="flip" onClick={props.func}>Login now</label></div>
      </div>
    </div>

  );
}

export default Signup;

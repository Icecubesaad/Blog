import React, { useState } from 'react';
const Signin = (props) => {
  const [SignInCredentials,setSignInCredentials] = useState({
    "email":"",
    "password":""
  });
  const ONchange = (e)=>{
    const name = e.target.name;
    const value  = e.target.value;
    setSignInCredentials({...SignInCredentials,[name]:value})
  }
  const Login = async()=>{
    const {email,password} = SignInCredentials
    const data = await fetch("/api/auth/Signin",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email,password
        })
    })
    const paresed = await data.json()
}
  return (
    <div class="login-form">
      <div className="title" id='login'>Login</div>
      <div class="input-boxes">
        <div class="input-box">
          <i class="fas fa-envelope"></i>
          <input type="text" name='email' placeholder="Enter your email" value={SignInCredentials.email} onChange={ONchange}/>
        </div>
        <div class="input-box">
          <i class="fas fa-lock"></i>
          <input type="password" name='password'  value={SignInCredentials.password} onChange={ONchange} placeholder="Enter your password" required />
        </div>
        <div class="text"><a href="#">Forgot password?</a></div>
        <div class="button input-box" onClick={Login}>
          <input type="submit" value="Sumbit" />
        </div>
        <div class="text sign-up-text">Don't have an account? <label for="flip" onClick={props.func}>Sigup now</label></div>
      </div>
    </div>

  );
}

export default Signin;

import React from 'react';
import { useState,useRef } from 'react';
const Signup = (props) => {
  const [imageFile, setimage] = useState();
  const fileInputRef = useRef(null);

  const handleSelectFile =() => {
    fileInputRef.current.click();
    console.log(imageFile)
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      setimage(reader.result)
    };
  };
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
        name,email,password,image:imageFile
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
        <div class="input-box">
          <i class="fas fa-lock"></i>
          <button className="select-file-btn" style={{height:"50px",marginRight:"20px",backgroundColor:"white",border:"2px solid black", color:"black", borderRadius:"7px", width:"150px",transition:"all 300ms"}} onClick={handleSelectFile}>
            Select File
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="file-input"
            onChange={handleFileInputChange}
          />
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

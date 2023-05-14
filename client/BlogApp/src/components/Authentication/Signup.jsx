import React from 'react';
import { useState,useRef } from 'react';
import Spinner from '../spinner/Spinner';
import Error from '../Alert/error';
import Spinner2 from '../spinner/spinner2';
import Success from '../Alert/Success';
const Signup = (props) => {
  const [success, setsuccess] = useState(false);
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black"
  });
  
  const handleMouseEnter = () => {
    setStyle({
      backgroundColor: "black",
      color: "white"
    });
  };
  
  const handleMouseLeave = () => {
    setStyle({
      backgroundColor: "white",
      color: "black"
    });
  };
  const [message, setmessage] = useState("hello");
  const [imageFile, setimage] = useState();
  const fileInputRef = useRef(null);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const handleSelectFile =() => {
    fileInputRef.current.click();
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
    setsuccess(false)
    const name = e.target.name;
    const value  = e.target.value;
    setSignUpCredentials({...SignUpCredentials,[name]:value})
  }
  const Register = async()=>{
    seterror(false)
    setloading(true)
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
    const parsed = await data.json()
    if(data.status === 200){
      setTimeout(() => {
        setSignUpCredentials({
          "email":"",
        "password":"",
        "name":""
        })
        setloading(false)
        setTimeout(() => {
          setsuccess(true)
          setTimeout(() => {
            setsuccess(false)
          }, 8000);
        }, 200);
      }, 1000);
      
    }
    else if(data.status === 422){
      setloading(false)
      setmessage("Enter valid email and password of 5 characters")
      seterror(true)
    }
    else if(data.status === 405){
      setloading(false)
      setmessage("Enter valid email")
      seterror(true)
    }
    else if(data.status === 401){
      setloading(false)
      setmessage("Please enter password of length 5")
      seterror(true)
    }
    else if(data.status === 403){
      setloading(false)
      setmessage("Username is already taken")
      seterror(true)
    }
    else if(parsed.error === "User already exists"){
      setloading(false)
      setmessage("Account with this email already exists")
      seterror(true)
    }
    else if(parsed.error === "Username is already taken"){
      setloading(false)
      setmessage("Username is already taken")
      seterror(true)
    }
    else if(parsed.error === "Internal server occured"){
      setloading(false)
      setmessage("Some error occured try again later")
      seterror(true)
    }
   
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
          <button className="select-file-btn" style={{
      height: "50px",
      marginRight: "20px",
      borderRadius: "7px",
      width: "250px",
      transition: "all 300ms",
      border: "2px solid black",
      ...style
    }} onClick={handleSelectFile} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
            Select profile picture
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="file-input"
            onChange={handleFileInputChange}
          />
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{ error ?  <Error message={message}/> : null}</div>
      {loading ? <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}><Spinner2/></div> : null}
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>{success ?  <Success message={"Account has been created you may signin now"}/> : null}</div>
        <div class="button-signup" onClick={Register}>
          Signup
        </div>
        <div class="text sign-up-text">Already have an account? <label for="flip" onClick={props.func}>Login now</label></div>
      </div>
    </div>

  );
}

export default Signup;

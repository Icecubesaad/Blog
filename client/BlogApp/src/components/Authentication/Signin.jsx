import React from 'react';
import { useState } from 'react';
const Signin = () => {
    const [styleT, setstyle] = useState({
            "transform":"scaleX(1)",
            "transition":"all 1s"
    });
    const flip = ()=>{
        setstyle({
           "transform":"scaleX(-1)",
           "transition":"all 1s"
        })
    }
    const flip2 = ()=>{
        setstyle({
           "transform":"scaleX(1)",
           "transition":"all 1s"
        })
    }
    return (
  <div class="container">
    <input type="checkbox" id="flip"/>
    <div class="cover">
      <div class="front">
        <div class="text">
          <span class="text-1" style={styleT}>Every new friend is a <br/> new adventure</span>
          <span class="text-2" style={styleT}>Let's get connected</span>
        </div>
      </div>
      <div class="back">
        <div class="text">
          <span class="text-1" style={styleT}>Complete miles of journey <br/> with one step</span>
          <span class="text-2" style={styleT}>Let's get started</span>
        </div>
      </div>
    </div>
    <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div class="text"><a href="#">Forgot password?</a></div>
              <div class="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div class="text sign-up-text">Don't have an account? <label for="flip" onClick={flip}>Sigup now</label></div>
            </div>
      </div>
        <div class="signup-form">
          <div class="title">Signup</div>
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div class="button input-box">
                <input/>
              </div>
              <div class="text sign-up-text">Already have an account? <label for="flip" onClick={flip2}>Login now</label></div>
            </div>
    </div>
    </div>
    </div>
  </div>

    );
}

export default Signin;

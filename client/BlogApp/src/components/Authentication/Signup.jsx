import React from 'react';
const Signup = (props) => {

  return (

    <div class="signup-form">
      <div class="title" id='signup'>Signup</div>
      <div class="input-boxes">
        <div class="input-box">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div class="input-box">
          <i class="fas fa-envelope"></i>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div class="input-box">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div class="button input-box">
          <input style={{textAlign:"center"}} value="Signup"/>
        </div>
        <div class="text sign-up-text">Already have an account? <label for="flip" onClick={props.func}>Login now</label></div>
      </div>
    </div>

  );
}

export default Signup;

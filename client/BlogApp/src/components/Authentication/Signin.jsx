import React from 'react';
const Signin = (props) => {
  return (
    <div class="login-form">
      <div className="title" id='login'>Login</div>
      <div class="input-boxes">
        <div class="input-box">
          <i class="fas fa-envelope"></i>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div class="input-box">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div class="text"><a href="#">Forgot password?</a></div>
        <div class="button input-box">
          <input type="submit" value="Sumbit" />
        </div>
        <div class="text sign-up-text">Don't have an account? <label for="flip" onClick={props.func}>Sigup now</label></div>
      </div>
    </div>

  );
}

export default Signin;

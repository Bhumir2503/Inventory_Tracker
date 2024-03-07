import React from 'react';
import '../../styles/login.css'
import logo from '../../assets/logo.svg';

function Login() {
  return (
    <div className='login'>
      <form action="">
        <img src={logo} alt="" />
        <h2>Sign in to your account</h2>
        <div className="inputs">
          <label className='header'>Username</label>
          <input type="text" placeholder="Username" />
          <label className='header'>Password</label>
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
          <label className='NotMember'>Not a member? <a href="/register">Get Started!</a></label>
        </div>
      </form>
    </div>
  );
}

export default Login;
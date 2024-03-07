import React from 'react';
import '../../styles/register.css'
import logo from '../../assets/logo.svg';

function Register () {
  return (
    <div className='register'>
      <form action="">
        <img src={logo} alt="" />
        <h2>Sign up for an account</h2>
        <div className="inputs">
          <label className="header">Email</label>
          <input type="email" placeholder="Email" />
          <label className='header'>Username</label>
          <input type="text" placeholder="Username" />
          <label className='header'>Password</label>
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <label className='Member'>Already a member? <a href="/login">Sign In!</a></label>
        </div>
      </form>
    </div>
  );
}

export default Register
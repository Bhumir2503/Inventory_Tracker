import React from 'react';
import '../../styles/register.css'
import logo from '../../assets/logo.svg';
import axios from 'axios';
import { useState } from 'react';

function Register () {
  const server = 'http://localhost:5000';
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const user = {
      email,
      username,
      password,
    };

    try {
      const response = await axios.post(`${server}/backend/user/register`, user);
      console.log(response.data);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <h2>Sign up for an account</h2>
        <div className="inputs">
          <label className="header">Email</label>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <label className='header'>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <label className='header'>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Sign Up</button>
          <label className='Member'>Already a member? <a href="/login">Sign In!</a></label>
        </div>
      </form>
    </div>
  );
}

export default Register;
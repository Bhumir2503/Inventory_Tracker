import React, { useEffect, useState } from 'react';
import '../../styles/register.css'
import logo from '../../assets/logo.svg';
import axios from 'axios';
axios.defaults.withCredentials = true;

function Register () {
  const server = 'http://localhost:5000';
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email');
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
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      }
    }
  };

  const handleTokenExist = async () => {
    if (document.cookie.includes('token')) {
      // Extract the token from the cookie
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        .split('=')[1];
  
      try {
        const response = await axios.post(`${server}/backend/user/verifyToken`, { token });
        console.log(response.data);
        if(response.data === 'You need to Login') {
          console.log('Token is invalid');
        }else {
          window.location.href = '/dashboard';
        }
      } catch(err) {
        console.log('An error occurred');
        //delete the token
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }
    } else {
      console.log('No token found');
    }
  };
  
  useEffect(() => {
    handleTokenExist();
  }, []);

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <h2>Sign up for an account</h2>
        <div className="inputs">
          <label className="header">Email</label>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <label className='header'>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required/>
          <label className='header'>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
          <button type="submit">Sign Up</button>
          {errorMessage && <div className='alert' style={{ color: '#e45858', padding: '10px', margin: '10px 0px' }}>{errorMessage}</div>}
          <label className='Member'>Already a member? <a href="/login">Sign In!</a></label>
        </div>
      </form>
    </div>
  );
}

export default Register;
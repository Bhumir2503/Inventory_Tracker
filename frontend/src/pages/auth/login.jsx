import React from 'react';
import '../../styles/login.css'
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

function Login() {
  const server = 'http://localhost:5000';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      username,
      password,
    };

    try {
      const response = await axios.post(`${server}/backend/user/login`, user);
      console.log(response.data);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('There was an error!', error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      }
    }
  };


  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <h2>Sign in to your account</h2>
        <div className="inputs">
          <label className='header'>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required/>
          <label className='header'>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
          <button type="submit">Sign In</button>
          {errorMessage && <div className='alert' style={{ color: '#e45858', padding: '10px', margin: '10px 0px' }}>{errorMessage}</div>}
          <label className='NotMember'>Not a member? <a href="/register">Get Started!</a></label>
        </div>
      </form>
    </div>
  );
}

export default Login;
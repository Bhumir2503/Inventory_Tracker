import React from 'react';
import '../styles/home.css';
import check from '../assets/check.svg';
import angle from '../assets/angle-right.svg';

function Home() {
  return (
    <div className='home'>
      <div className="left">
        <h1>Inventory Tracking Made Easy.</h1>
        <h2>Manage your inventory with ease. Keep track of your products, sales, and more.</h2>
        <div className="list">
          <img src={check} alt="" />
          <p>Consolidate and streamline your inventory management process.</p>
        </div>
        
        <div className="list">
          <img src={check} alt="" />
          <p>Track inventory, contacts, sales, and more.</p>
        </div>

        <div className="list">
          <img src={check} alt="" />
          <p>Perfect for small business inventory management.</p>
        </div>
        
        <div className="actionbutton">
          <a href="/register" className="button">Get Started</a>
          <a href="/login" className='button'>Login</a>
        </div>
      </div>
      <div className="right">
        <h1>Img goes Here</h1>
      </div>
    </div>
  );
}

export default Home;
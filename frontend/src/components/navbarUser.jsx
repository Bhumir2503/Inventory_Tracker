import React from 'react';
import logo from '../assets/logo2.svg';
import dashboard from '../assets/dashboard.svg';
import contact from '../assets/contact.svg';
import inventory from '../assets/inventory.svg';
import purchase from '../assets/purchase.svg';
import sale from '../assets/sale.svg';
import logout from '../assets/logout.svg';
import '../componentStyles/navbarUser.css';


function NavbarUser(){
    return (
        <div className="navbarUser">
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/dashboard"><img src={dashboard} alt="Dashboard" /></a></li>
                        <li><a href="/contact"><img src={contact} alt="" /></a></li>
                        <li><a href="/inventory"><img src={inventory} alt="" /></a></li>
                        {/* <li><a href="/purchase"><img src={purchase} alt="" /></a></li>
                        <li><a href="/sales"><img src={sale} alt="" /></a></li> */}
                    </ul>
                    <a href="/logout"><img className='logout' src={logout} alt="" /></a>
                </div>
            </div>
            <div className="right">
            </div>
        </div>
    )
}

export default NavbarUser;
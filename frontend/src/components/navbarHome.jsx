import React from 'react';
import logo from '../assets/logo.svg';
import '../componentStyles/navbarHome.css';

function NavbarHome() {
    return (
        <div className="navbar-home">
            <div className="navbar-home__logo">
                <img src={logo} alt="logo" />
                <a href="/"><h3>InventoryTrack+</h3></a>
            </div>
        </div>
    );
}

export default NavbarHome;
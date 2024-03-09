import React from 'react';

function NavbarUser(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/dashboard">NavbarUser</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/contact">Contacts</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/inventory">Inventory</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/purchase">Purchases</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/sales">Sales</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavbarUser;
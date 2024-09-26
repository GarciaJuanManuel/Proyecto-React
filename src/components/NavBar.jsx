import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/index.html" className="navbar-brand-link">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" className="home-icon" />
                    <span className="navbar-brand">Mi Tienda</span>
                </a>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;

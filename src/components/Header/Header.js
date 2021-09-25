import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div >
            <div className='header'>
                <img src={logo} alt="" />
            </div>

            <nav className='navBar'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
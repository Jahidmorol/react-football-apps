import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <h1>F<span>oo</span>tball</h1>
            <div className='header-info'>
                <a href="">Home</a>
                <a href="">Page</a>
                <a href="">Blog</a>
                <a href="">Detalis</a>
            </div>
        </div>
    );
};

export default Header;
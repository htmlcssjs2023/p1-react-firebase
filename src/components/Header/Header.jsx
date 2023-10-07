import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-header'>
            <Link to="/">Home</Link>
            <Link to="/about">About US</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Header;
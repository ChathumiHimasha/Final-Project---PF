import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <h2>Lady<span>Lily Shoes</span></h2>
            </div>
            <ul>
                <li><Link className='Link' to='/'>Home</Link></li>
                <li><Link className='Link' to='/products'>Products</Link></li>
                <li><Link className='Link' to='/about'>About</Link></li>
                <li><Link className='Link' to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='fw-bold fs-5 pt-3'>
            <Link className='text-decoration-none text-black p-4' to='/home'>HOME</Link>
            <Link className='text-decoration-none text-black p-4' to='/reviews'>REVIEWS</Link>
            <Link className='text-decoration-none text-black p-4' to='/dashboard'>DASHBOARD</Link>
            <Link className='text-decoration-none text-black p-4' to='/blogs'>BLOGS</Link>
            <Link className='text-decoration-none text-black p-4' to='/about'>ABOUT</Link>
        </nav>

    );
};

export default Header;
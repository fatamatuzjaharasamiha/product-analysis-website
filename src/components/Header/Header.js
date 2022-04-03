import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <h3><Link to='/home'>HOME</Link></h3>
                <h3><Link to='/reviews'>REVIEWS</Link></h3>
                <h3><Link to='/dashboard'>REVIEWS</Link></h3>
            </nav>
        </div>
    );
};

export default Header;
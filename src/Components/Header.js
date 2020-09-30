import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link className='text' to='/'>
                <span >Home</span>
            </Link>
        </div>
    )
}

export default Header
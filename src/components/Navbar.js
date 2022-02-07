import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='navbar-wrapper'>
            <div className='navbar section-center'>
                <h1 className='navbar-logo'>hacker news</h1>
                <a
                    href='https://github.com/DrazhinUstin/Hacker_News'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='navbar-github'
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

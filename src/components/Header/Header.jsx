import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h2 className='title'>Knowledge Cafe</h2>
            <div >
                <a href="/Home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/About">About</a>
                <img className='nav-img' src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80" alt="" />
            </div>
        </nav>
    );
};

export default Header;
import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-primary bg-opacity-50 p-3">
                <div className='d-flex align-items-center'>
                    <img className='logo' src={logo} alt="" />
                    <a className="navbar-brand fw-bold fs-2" href="/">Modern Gym Club</a>
                </div>
            </nav>
            <h4 className='mt-3 p-3'>Todays WorkOut Plans</h4>
        </div>
    );
};

export default Header;
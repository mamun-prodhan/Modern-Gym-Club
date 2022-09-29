import React from 'react';

const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-2" href="/">Modern Gym Club</a>
                </div>
            </nav>
            <h4 className='container mt-3'>Todays WorkOut Plans</h4>
        </div>
    );
};

export default Header;
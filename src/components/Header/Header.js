import React from 'react';

const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-danger p-3">
                <div>
                    <a className="navbar-brand fw-bold fs-2" href="/">Modern Gym Club</a>
                </div>
            </nav>
            <h4 className='mt-3 p-3'>Todays WorkOut Plans</h4>
        </div>
    );
};

export default Header;
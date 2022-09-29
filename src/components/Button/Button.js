import React from 'react';

const Button = ({time}) => {
    return (
        <div>
            <button className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>{time}<span>s</span></button>
        </div>
    );
};

export default Button;
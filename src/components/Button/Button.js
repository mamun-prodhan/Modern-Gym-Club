import React from 'react';

const Button = (props) => {
    const time = props.time;

    return (
        <div>
            <button onClick={()=>props.handleBreakTime(props.time)} className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>{time}<span>s</span></button>
        </div>
    );
};

export default Button;
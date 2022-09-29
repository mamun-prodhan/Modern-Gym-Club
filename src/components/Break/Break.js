import React, { useState } from 'react';
import Button from '../Button/Button';

const Break = (props) => {
    const times = [15, 20, 25, 30]
    
    return (
        <div>
            <h4 className='mt-5'>Add A Break</h4>
            <div className='d-flex justify-content-between mt-3 p-3 bg-light rounded'>
                {
                   times.map(time => <Button
                    handleBreakTime={props.handleBreakTime}
                    time={time}
                    key={time}
                   ></Button>) 
                }
            </div>
        </div>
    );
};

export default Break;
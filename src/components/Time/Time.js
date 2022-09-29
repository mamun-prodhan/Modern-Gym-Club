import React from 'react';

const Time = () => {
    return (
        <div>
            <h4 className='mt-5 mb-3'>Exercise Details</h4>
            <div className='d-flex justify-content-between align-items-center p-3 m-0 bg-light rounded'>
                <p className='fw-bold m-0'>Exercise Time</p>
                <p className='m-0'>0 seconds</p>
            </div>
            <div className='d-flex justify-content-between align-items-center p-3 mt-3 bg-light rounded'>
                <p className='fw-bold m-0'>Break Time</p>
                <p className='m-0'>0 seconds</p>
            </div>
            <div>
                <button type="button" class="w-100 btn btn-outline-primary py-3 mt-5 mb-3 fw-bold">Activity Completed</button>
            </div>
        </div>
    );
};

export default Time;
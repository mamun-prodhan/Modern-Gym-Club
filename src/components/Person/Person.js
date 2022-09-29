import React from 'react';
import image from '../../images/mamun.jpg'
import './Person.css'

const Person = () => {
    return (
        <div className='bg-secondary rounded bg-opacity-25 p-4'>
            <div className='d-flex align-items-center p-3'>
                <img className='rounded-circle my-img' src={image} alt="" />
                <div className='ms-2'>
                    <h4>Mamun Prodhan</h4>
                    <p>Web Developer</p>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-3 p-3 bg-light rounded'>
                <div>
                    <h4>60 kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.8</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>23 yrs</h4>
                    <p>Age</p>
                </div>
            </div>

            <h4 className='mt-5'>Add A Break</h4>

            <div className='d-flex justify-content-between mt-3 p-3 bg-light rounded'>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>15<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>20<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>25<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>30<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary fw-bold'>40<span>s</span></button>
                </div>
            </div>

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

export default Person;
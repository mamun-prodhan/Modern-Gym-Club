import React from 'react';
import image from '../../images/mamun.jpg'
import './Person.css'

const Person = () => {
    return (
        <div className='bg-secondary bg-opacity-25 p-4'>
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

            <h4 className='mt-3'>Add A Break</h4>

            <div className='d-flex justify-content-between mt-3 p-3 bg-light rounded'>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary'>15<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary'>20<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary'>25<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary'>30<span>s</span></button>
                </div>
                <div>
                    <button className='border-primary rounded p-2 btn btn-outline-primary'>40<span>s</span></button>
                </div>
            </div>

            <h4 className='mt-3 mb-3'>Exercise Details</h4>

            
        </div>
    );
};

export default Person;
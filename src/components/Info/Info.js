import React from 'react';
import image from '../../images/mamun.jpg'
import './Info.css'
const Info = () => {
    return (
        <div>
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
        </div>
    );
};

export default Info;
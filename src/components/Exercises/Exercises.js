import React from 'react';

const Exercises = (props) => {

    const { id, name, description, age, time, img } = props.activity;

    return (
        <div className="col">
            <div className="card">
                <img src={img} alt="" className='bd-placeholder-img card-img-top" width="100%" height="140"' />

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className='fw-semibold'>For Age: <span className='fw-bold'>{age}</span></p>
                    <p className='fw-semibold'>Time require: <span className='fw-bold'>{time}s</span></p>
                    <div>
                        <button>Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercises;
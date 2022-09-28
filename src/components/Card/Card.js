import React from 'react';

const Card = (props) => {
    const {id, name, description, age, time, img} = props.exercise;
    return (
        <div>
            <h2>This is card</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Card;
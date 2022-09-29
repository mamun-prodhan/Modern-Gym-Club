import React from 'react';
import Break from '../Break/Break';
import Info from '../Info/Info';
import Time from '../Time/Time';
import './Person.css'

const Person = () => {
    return (
        <div className='bg-secondary rounded bg-opacity-25 p-4'>
            
            <Info></Info>
            <Break></Break>
            <Time></Time>
            
        </div>
    );
};

export default Person;
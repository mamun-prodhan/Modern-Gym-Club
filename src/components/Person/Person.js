
import React, { useState } from 'react';
import Break from '../Break/Break';
import Info from '../Info/Info';
import Time from '../Time/Time';
import './Person.css'

const Person = (props) => {

    const [clickedTime, setClickedTime] = useState(0);

    const handleBreakTime = (breaktime)=>{
        setClickedTime(breaktime);
    }


    return (
        <div className='bg-secondary rounded bg-opacity-25 p-4'>
            
            <Info></Info>
            <Break handleBreakTime={handleBreakTime}></Break>
            <Time 
            times={props.times}
            clickedTime={clickedTime}
            ></Time>
            
        </div>
    );
};

export default Person;
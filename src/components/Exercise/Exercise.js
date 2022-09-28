import React, {useEffect, useState} from 'react';

const Exercise = () => {

    const [exercises, setExercises] = useState([]);
    console.log(exercises);

    useEffect( ()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, []);

    return (
        <div className='container'>
            {}
        </div>
    );
};

export default Exercise;
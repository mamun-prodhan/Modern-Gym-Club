import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';

const Exercise = () => {

    const [exercises, setExercises] = useState([]);

    useEffect( ()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, []);

    return (
        <div className='container'>
            {
                exercises.map(exercise=><Card 
                    key={exercise.id}
                    exercise={exercise}
                    ></Card>)
            }
        </div>
    );
};

export default Exercise;
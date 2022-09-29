import React, { useState, useEffect } from 'react';
import Exercises from '../Exercises/Exercises';
import Person from '../Person/Person';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    return (
        <div className='row'>

            <div className='col-8'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                   activities.map(activity => <Exercises
                   key={activity.id}
                   activity={activity}
                   ></Exercises>) 
                }
                </div>
            </div>
            <div className='col-4'>
                <Person></Person>
            </div>



        </div>
    );
};

export default Activities;
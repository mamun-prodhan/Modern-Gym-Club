import React, { useState, useEffect } from 'react';
import Exercises from '../Exercises/Exercises';
import Person from '../Person/Person';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [times, setTimes] = useState([]);

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    const handleAddToList = (activity)=>{
        const newtimes = [...times, activity];
        setTimes(newtimes);

    }


    return (
        <div className='row'>

            <div className='col-lg-8 col-md-6'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                   activities.map(activity => <Exercises
                   key={activity.id}
                   activity={activity}
                   handleAddToList={handleAddToList}
                   ></Exercises>) 
                }
                </div>
            </div>
            <div className='col-lg-4 col-md-6'>
                <Person times={times}></Person>
            </div>



        </div>
    );
};

export default Activities;
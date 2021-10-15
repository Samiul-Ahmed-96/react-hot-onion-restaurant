import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleDinner from '../SingleDinner/SingleDinner';

const Dinner = () => {
    const [dinner,setDinner] = useState([])

    useEffect(()=>{
        fetch("/dinner.json")
        .then(res => res.json())
        .then(data => setDinner(data))
    },[])
    return (
        <div>
        <Row>
        {
            dinner.map(dinnerItem => <SingleDinner key={dinnerItem.id} dinnerItem={dinnerItem}></SingleDinner>)
        }
        </Row>
        </div>
    );
};

export default Dinner;
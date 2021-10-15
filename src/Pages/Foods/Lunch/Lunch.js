import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleLunch from '../SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunch,setLunch] = useState([])

    useEffect(()=>{
        fetch("/lunch.json")
        .then(res => res.json())
        .then(data => setLunch(data))
    },[])
    return (
        <div>
        <Row>
        {
            lunch.map(lunchItem => <SingleLunch key={lunchItem.id} lunchItem={lunchItem}></SingleLunch>)
        }
        </Row>
        </div>
    );
};

export default Lunch;
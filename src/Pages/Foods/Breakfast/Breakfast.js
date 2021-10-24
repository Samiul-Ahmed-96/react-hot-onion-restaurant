import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';

const Breakfast = () => {
    const [breakfasts,setBreakfast] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/items")
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])
    return (
        <div>
            <Row>
                {
                    breakfasts.map(breakfastItem => <SingleBreakfast key={breakfastItem.id} breakfastItem={breakfastItem} ></SingleBreakfast>)
                }
            </Row>            
        </div>
    );
};

export default Breakfast;
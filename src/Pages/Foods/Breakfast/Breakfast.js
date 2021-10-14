import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';

const Breakfast = () => {
    const [breakfasts,setBreakfast] = useState([])

    useEffect(()=>{
        fetch("./Breakfast.json")
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])
    return (
        <div>
            <Row>
                {
                    breakfasts.map(breakfastItem => <SingleBreakfast></SingleBreakfast>)
                }
            </Row>            
        </div>
    );
};

export default Breakfast;
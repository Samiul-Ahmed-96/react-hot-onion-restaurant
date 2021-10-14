import React from 'react';
import { Container } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';

const Foods = () => {
    return (
        <Container>
            <h1 className="text-white my-5">Our Meals</h1>
            <Breakfast></Breakfast>
            <Lunch></Lunch>
        </Container>
    );
};

export default Foods;
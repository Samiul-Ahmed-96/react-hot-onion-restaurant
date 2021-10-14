import React from 'react';
import { Container } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

const Foods = () => {
    return (
        <Container>
            <h1 className="text-white my-5">Our Meals</h1>
            <Breakfast></Breakfast>
        </Container>
    );
};

export default Foods;
import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Foods = () => {
    return (
        <Container>
            <h1 className="text-white my-5">Our Meals</h1>
            <Tabs>
            <Tab className="tabBtn" eventKey="breakfast" title="Breakfast">
                <Breakfast></Breakfast>
            </Tab>
            <Tab eventKey="lunch" title="Lunch">
                <Lunch></Lunch>
            </Tab>
            <Tab eventKey="dinner" title="dinner">
                <Dinner></Dinner>
            </Tab>
            
          </Tabs>
        </Container>
    );
};

export default Foods;
import React from 'react';
import { Col } from 'react-bootstrap';

const SingleDinner = (props) => {
    const {name,description,price,rating,img} = props.dinnerItem;
    return (
            <Col md={4} sm={6} xs={12}>
                <div className="breakfast-item">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <small>{rating}</small>
                    <h3>${price}</h3>
                </div>
            </Col>
    );
};

export default SingleDinner;
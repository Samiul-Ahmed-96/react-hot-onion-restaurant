import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    const {id,name,description,price,rating,img} = props.matchItem;
    return (
            <Col md={4} sm={6} xs={12}>
                <div className="breakfast-item">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <small>{rating}</small>
                    <h3>${price}</h3>
                    <Link to={`/food/${id}`}>
                    <button>More Details</button>
                    </Link>
                </div>
            </Col>
    );
};

export default SearchItem;
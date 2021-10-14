import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bannerBg from "../../Images/banner/bannerbackground.png";
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Row>
               <Col>
               <div className="banner">
               <img src={bannerBg} alt="" />
               <div className="search">
                   <h1>Best food waiting for your belly</h1>
                   <input type="text" placeholder="Search your meal" />
                   <button>search</button>
               </div>
           </div>
               </Col>
            </Row>
        </div>
    );
};

export default Banner;
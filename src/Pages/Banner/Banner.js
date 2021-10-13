import React from 'react';
import { Row } from 'react-bootstrap';
import bannerBg from "../../Images/banner/bannerbackground.png";
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Row>
                <div className="banner">
                    <img src={bannerBg} alt="" />
                </div>
            </Row>
        </div>
    );
};

export default Banner;
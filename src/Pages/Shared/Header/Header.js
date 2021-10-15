import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cartIcon from "../../../Images/header/trolley.png";
import logo from "../../../Images/logo.png";
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header" sticky="top">
                <Container>
                    <div className="header-main">
                        <Row className="header-fixed">
                            <Col xs={12} md={2}>
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                            </Col>
                            <Col xs={12} md={10}>
                                <div className="main-menu">
                                    <ul>
                                        <li><Link to="/cart" className="cartIcon"><img src={cartIcon} alt="" /></Link></li>
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/meals">Meals</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/signup" className="SignUp">Sign up</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>                    
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;
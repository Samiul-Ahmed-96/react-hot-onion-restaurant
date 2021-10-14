import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
        <Container>
            <Row>
                <Col md={3} sm={6} xs={12}>
                    <div className="footer-item">
                        <h3>Address</h3>
                        <p>97845 hot Onion st. 567</p>
                        <p>Los Angeles - US</p>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="footer-item">
                        <h3>Reservations</h3>
                        <p>+94 423-23-221</p>
                        <p>reservations@Foores.com</p>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="footer-item">
                        <h3>Opening Hours</h3>
                        <p>Mon - Sat: 10am - 11pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                <div className="footer-item">
                    <h3>Keep in touch</h3>
                    <input type="text" name="" placeholder="Your Email" id="" />
                    <button>Send</button>
                </div>
            </Col>
            </Row>
        </Container>    
        </div>
    );
};

export default Footer;
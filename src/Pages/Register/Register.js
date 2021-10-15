import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Register.css';
const Register = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <form>
                        <div className="form-item text-white">
                            <img src={logo} alt="" />
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Register</button>
                            <br />
                            <div className="thirdParty">
                                <button>Google</button>
                            </div>
                            <Link to="/login">Already have an account</Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
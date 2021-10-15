import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../Images/logo.png';

const Login = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <form>
                        <div className="form-item text-white">
                            <img src={logo} alt="" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Login</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
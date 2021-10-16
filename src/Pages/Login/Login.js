import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../Images/logo.png';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
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
                            <Link to="/login">
                                <button onClick={signInUsingGoogle}><i class="fab fa-google"></i> Sign In Using Google</button>
                            </Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
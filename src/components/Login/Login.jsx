import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { push } from 'connected-react-router';
import { setUserName } from "./loginActions";
import './loginStyles.scss';

function Login() {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.login.name);
    const [userNameTxt, setUserNameTxt] = useState('');

    const login = () => {
        dispatch(setUserName(userNameTxt));
        dispatch(push('/universities'));
    };

    return (
        <div className="login">
            <div className="login-form">
                <Form style={{width: '70%'}} onSubmit={login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>What's your name?</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            placeholder="Full Name"
                            value={userNameTxt}
                            onChange={e => setUserNameTxt(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" disabled={userNameTxt.length < 2} style={{width: '100%'}} type="submit">
                        Continue
                    </Button>
                </Form>
            </div>
            <div className="login-photo"/>
        </div>
    )
}

export default Login;
import React, { useState, useEffect } from 'react';
import { login} from '../../actions/auth.actions';
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Form } from '../commons/form';
import './Card.css';

function Login(props) {

    const dispatch = useDispatch();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    function loginF(e) {
        e.preventDefault()
     dispatch(login(loginForm))
    }

    const { title, imgSrc, description, buttonValue, onclick } = props;
    return (
        <Form onSubmit={e => loginF(e)}>
        <span className="card">
            <h1>{title}</h1>
                <Label for="fname">Email:</Label>
                <br></br>
                <Input onChange={(e) => { setLoginForm({...loginForm, email: e.target.value})}} type="text" id="fname" name="fname" value={loginForm.email}>
                </Input>
                <br></br>

                <Label for="lname">Password:</Label>
                <br></br>
                <Input onChange={(e) => { setLoginForm({...loginForm, password: e.target.value})}} type="password" id="lname" name="lname" value={loginForm.password}>
                </Input>
            <p>{description}</p>
            <button>{buttonValue}</button>
        </span>
        </Form>                

    );

}

export default Login;

import React, { useState, useEffect } from 'react';
import { registerUser } from '../../actions/user.action';
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Form } from '../commons/form';
import './Card.css';

function Register(props) {

    const { title, imgSrc, description, buttonValue, onclick } = props;

    const dispatch = useDispatch();
    const [registerForm, setRegisterForm] = useState({
        name: '',
        password: '',
        email: '',
        telefone: '',
        zipcode:  '',
        type:'',
        address: '',
        city: '',
        state: '',
        status: 1,
    });


    function register() {
        dispatch(registerUser())
    }

    return (
        <Form onSubmit={register}>
            <span className="card">
                <h1>{title}</h1>
                <Label>Name:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, email: e.target.value})}} value={registerForm.name} >
                </Input>
                <Label>Password:</Label>
                <Input type="password" onChange={(e) => { setRegisterForm({...registerForm, password: e.target.value})}} value={registerForm.password} >
                </Input>
                <Label>Email:</Label>
                <Input type="email" onChange={(e) => { setRegisterForm({...registerForm, email: e.target.value})}} value={registerForm.email}>
                </Input>
                <Label>Type:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, type: e.target.value})}} value={registerForm.type}>
                </Input>
                <Label>Telefone:</Label>
                <Input type="telefone" onChange={(e) => { setRegisterForm({...registerForm, telefone: e.target.value})}} value={registerForm.telefone}>
                </Input>
                <Label>Zipcode:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, zipcode: e.target.value})}} value={registerForm.zipcode}>
                </Input>
                <Label>Address:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, address: e.target.value})}} value={registerForm.address}>
                </Input>
                <Label>City:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, city: e.target.value})}} value={registerForm.city}>
                </Input>
                <Label>State:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, state: e.target.value})}} value={registerForm.state}>
                </Input>
                <p>{description}</p>
                <button>{buttonValue}</button>
            </span>
        </Form>
    )
}

export default Register;

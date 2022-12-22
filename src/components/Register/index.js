import React, { useState, useEffect } from 'react';
import { registerUser } from '../../actions/user.action';
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Form, Select } from '../commons/form';
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


    function register(e) {
        console.log(registerForm)
        dispatch(registerUser(registerForm))
    }

    return (
        <Form onSubmit={(e) => register(e)}>
            <span className="card">
                <h1>{title}</h1>
                <Label>Name:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, name: e.target.value})}} value={registerForm.name} required>
                </Input>
                <Label>Password:</Label>
                <Input type="password" onChange={(e) => { setRegisterForm({...registerForm, password: e.target.value})}} value={registerForm.password} required>
                </Input>
                <Label>Email:</Label>
                <Input type="email" onChange={(e) => { setRegisterForm({...registerForm, email: e.target.value})}} value={registerForm.email} required>
                </Input>
                <Label>Type:</Label>
                <Select onChange={(e) => { setRegisterForm({...registerForm, type: e.target.value})}} value={registerForm.type} required>
                    <option defaultValue="consumer">Consumer</option>
                    <option value="admin">Admin</option>
                </Select>
                <Label>Telefone:</Label>
                <Input type="telefone" onChange={(e) => { setRegisterForm({...registerForm, telefone: e.target.value})}} value={registerForm.telefone} required>
                </Input>
                <Label>Zipcode:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, zipcode: e.target.value})}} value={registerForm.zipcode} required>
                </Input>
                <Label>Address:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, address: e.target.value})}} value={registerForm.address} required>
                </Input>
                <Label>City:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, city: e.target.value})}} value={registerForm.city} required>
                </Input>
                <Label>State:</Label>
                <Input type="text" onChange={(e) => { setRegisterForm({...registerForm, state: e.target.value})}} value={registerForm.state} required>
                </Input>
                <p>{description}</p>
                <button>{buttonValue}</button>
            </span>
        </Form>
    )
}

export default Register;

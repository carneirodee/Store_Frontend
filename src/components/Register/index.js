import React, { useState, useEffect } from 'react';
import { registerUser } from '../../actions/user.action';
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Form } from '../commons/form';
import './Card.css';

function Register(props) {

    const { title, imgSrc, description, buttonValue, onclick } = props;

        // name: "Erin",
        // password:"Erin",
        // email: "deysedayane.o.c@gmail.com",
        // telefone: "(81) 983145270",
        // zipcode:"5001-360",
        // type: "admin",
        // address:"Rua Do Coo",
        // city:"Recife",
        // state: "PE",
        // status: 1,

    const dispatch = useDispatch();
    const [name, setName] = useState(formInit);


    function register() {
        dispatch(registerUser())
    }

    return (
        <Form onSubmit={register}>
            <span className="card">
                <h1>{title}</h1>
                <Label>Name:</Label>
                <Input type="text" value{} >
                </Input>

                <Label>Password:</Label>
                <Input type="password" >
                </Input>
                <Label>Email:</Label>
                <Input type="email" >
                </Input>
                <Label>Type:</Label>
                <Input type="text" >
                </Input>
                <Label>Telefone:</Label>
                <Input type="telefone" >
                </Input>
                <Label>Zipcode:</Label>
                <Input type="text" >
                </Input>
                <Label>Address:</Label>
                <Input type="text" >
                </Input>
                <Label>City:</Label>
                <Input type="text" >
                </Input>
                <Label>State:</Label>
                <Input type="text" >
                </Input>
                <p>{description}</p>
                <button onClick={onclick}>{buttonValue}</button>
            </span>
        </Form>
    )
}

export default Register;

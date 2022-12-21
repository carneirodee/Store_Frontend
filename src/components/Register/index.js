import React, { useState, useEffect } from 'react';
import { Input, Label, Form } from '../commons/form';

function Register(props) {


    return (
        <Form>
             <Label>Name:</Label>
             <Input type="text" >
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
        </Form>
    )
}

export default Register;

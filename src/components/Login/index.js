import React, { useState, useEffect } from 'react';
import { Input, Label, Form } from '../commons/form';

function Login(props) {


    return (
        <Form>
            <Label for="fname">Email:</Label>
            <br></br>
            <Input type="text" id="fname" name="fname">
            </Input>
            <br></br>

            <Label for="lname">Password:</Label>
            <br></br>
            <Input type="password" id="lname" name="lname">
            </Input>
        </Form>
    )
}

export default Login;

import React, { useState, useEffect } from 'react';
import { updateUser, fetchUser } from '../../actions/user.action';
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Form, Select } from '../commons/form';
import './Card.css';

function UpdateUser(props) {

    const { title, imgSrc, description, buttonValue, onclick } = props;
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch();
    const [updateForm, setUpdateForm] = useState({
        name: user.name,
        password: '',
        email: user.email,
        telefone: user.telefone,
        zipcode: user.zipcode,
        type: user.type,
        address: user.address,
        city: user.city,
        state: user.state,
        status: user.status
    });

    const [error, setError] = useState(false)
    function update(e) {
        e.preventDefault()
        if(updateForm.password !== ''){
            setError(false)
            dispatch(updateUser(localStorage.getItem('id'), updateForm));
            dispatch(fetchUser(localStorage.getItem('id')));
        }else{
            setError(true)
        }
    }

    return (
        <Form onSubmit={(e) => update(e)}>
            <span className="card">
                <h1>{title}</h1>
                <Label>Name:</Label>
                <Input type="text" onChange={(e) => { setUpdateForm({...updateForm, name: e.target.value})}} value={updateForm.name} required>
                </Input>
                <Label>Password:</Label>
                <Input type="password" onChange={(e) => { setUpdateForm({...updateForm, password: e.target.value})}} value={updateForm.password} required >
                </Input>
                {error && <p>Type a password</p>}
                <Label>Email:</Label>
                <Input type="email" onChange={(e) => { setUpdateForm({...updateForm, email: e.target.value})}} value={updateForm.email} required>
                </Input>
                <Label>Type:</Label>
                <Select onChange={(e) => { setUpdateForm({...updateForm, type: e.target.value})}} value={updateForm.type} required>
                    <option value="consumer">Consumer</option>
                    <option value="admin">Admin</option>
                </Select>
                <Label>Telefone:</Label>
                <Input type="telefone" onChange={(e) => { setUpdateForm({...updateForm, telefone: e.target.value})}} value={updateForm.telefone} required>
                </Input>
                <Label>Zipcode:</Label>
                <Input type="text" onChange={(e) => { setUpdateForm({...updateForm, zipcode: e.target.value})}} value={updateForm.zipcode} required>
                </Input>
                <Label>Address:</Label>
                <Input type="text" onChange={(e) => { setUpdateForm({...updateForm, address: e.target.value})}} value={updateForm.address} required>
                </Input>
                <Label>City:</Label>
                <Input type="text" onChange={(e) => { setUpdateForm({...updateForm, city: e.target.value})}} value={updateForm.city} required>
                </Input>
                <Label>State:</Label>
                <Input type="text" onChange={(e) => { setUpdateForm({...updateForm, state: e.target.value})}} value={updateForm.state} required>
                </Input>
                <p>{description}</p>
                <button>{buttonValue}</button>
            </span>
        </Form>
    )
}

export default UpdateUser;

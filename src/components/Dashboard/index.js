import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserInfo from '../UserInfo';
import { Input, Label, Form } from '../commons/form';
import { addProduct } from '../../actions/products.actions';
import { logout } from '../../actions/auth.actions'

import './Card.css';

function Dashboard(props) {

    const dispatch = useDispatch();

    const [productForm, setProductForm] = useState({
        qtd: '',
        image: '',
        name: '',
        price: '',
        description: '',
        status: 1
    });
    const type = localStorage.getItem('type')


    function addToStore(e) {
        e.preventDefault()
        dispatch(addProduct(productForm))
    }

    function logoutUser() {
        dispatch(logout({ id: localStorage.getItem('id') }))
        localStorage.clear()
    }

    const { title, imgSrc, description, buttonValue, onclick } = props;

    return (
        <>
            <UserInfo title={'User Info'}
                description={description}
                icon={""}
                buttonValue="Logout"
                onclick={(e) => logoutUser(e)}
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" width="250" />
                <h1>{localStorage.getItem('name')}</h1>
            </UserInfo>
            {
                type === 'admin' &&
                <Form onSubmit={(e) => addToStore(e)}>
                    <span className="card">
                        <h1>{title}</h1>
                        <Label for="fname">Name:</Label>
                        <br></br>
                        <Input onChange={(e) => { setProductForm({ ...productForm, name: e.target.value }) }} type="text" id="fname" name="fname" value={productForm.name}>
                        </Input>
                        <br></br>
                        <Label for="lname">Price:</Label>
                        <br></br>
                        <Input onChange={(e) => { setProductForm({ ...productForm, price: e.target.value }) }} type="text" id="lname" name="lname" value={productForm.price}>
                        </Input>
                        <br></br>
                        <Label for="fname">Description:</Label>
                        <br></br>
                        <Input onChange={(e) => { setProductForm({ ...productForm, description: e.target.value }) }} type="text" id="lname" name="lname" value={productForm.description}>
                        </Input>
                        <br></br>
                        <Label for="fname">Quantidade:</Label>
                        <br></br>
                        <Input onChange={(e) => { setProductForm({ ...productForm, qtd: e.target.value }) }} type="text" id="lname" name="lname" value={productForm.qtd}>
                        </Input>
                        <br></br>
                        <button>{buttonValue}</button>
                    </span>
                </Form>
            }
        </>
    )
}

export default Dashboard;

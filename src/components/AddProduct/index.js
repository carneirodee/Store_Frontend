import React, { useState, useEffect } from 'react';
import { Input, Label, Form } from '../commons/form';

function AddProduct(props) {


    return (
           <Form>
             <Label>Name:</Label>
             <Input type="text" >
            </Input>
            <Label>Price:</Label>
            <Input type="text" >
            </Input>
            <Label>Description:</Label>
            <Input type="email" >
            </Input>
            <Label>Quantidade:</Label>
            <Input type="text" >
            </Input>  
        </Form>
    )
}

export default AddProduct;

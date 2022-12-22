import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import Card from '../Card';
import { useDispatch, useSelector } from "react-redux";
import { updatingCart, fetchCart } from '../../actions/cart.actions';
import { Input, Label, Form, Select } from '../commons/form';

function Cart(props) {

    const { cartState, products } = props;
    const { cart } = cartState
    let productsArr = cartState.cart.length > 0 ? cartState.cart : [];
    let userId = localStorage.getItem('id')
    const dispatch = useDispatch();

    function removeFromCart(e, id) {
        e.preventDefault();
        productsArr = productsArr.filter(function( obj ) {
            return obj !== id;
        });
        console.log(id)
        dispatch(updatingCart(cartState.id, {products: productsArr, userId: userId }))
        dispatch(fetchCart(localStorage.getItem('id')))
    }

    return (
        <>
            {cart && products.length > 0 ?
                    cart.map((productId, key) =>{
                     let product = products.find(({ _id }) => _id === productId);
                    if (product !== undefined) {
                        return <ProductCard title={product.name}
                            description={product.description}
                            icon={""}
                            price={product.price}
                            buttonValue="Remove"
                            onclick={(e) => {removeFromCart(e,productId) }}
                            key={key}>
                       <img src="https://www.nicepng.com/png/detail/443-4431327_png-file-fa-fa-product-icon.png" width={150}/>
                        </ProductCard>
                    }})
                : <></>}
                <br></br>
        </>
    )
}

export default Cart;

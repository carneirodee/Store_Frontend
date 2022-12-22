import React, { useState, useEffect } from 'react';
import { updatingCart, creatingCart, fetchCart} from '../../actions/cart.actions';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../ProductCard';

function Products(props) {

    const { products, cartState} = props;
    let userId = localStorage.getItem('id')
    const id = cartState.id
    const productsArr = cartState.cart.length > 0 ? cartState.cart : [];

    const dispatch = useDispatch();

    function addToCart(id) {
        productsArr.push(id)
        if(cartState.cart.length === 0){
            console.log('CREATE')
            dispatch(creatingCart({products: productsArr, userId: userId }))
            dispatch(fetchCart(localStorage.getItem('id')))

        }else{
            console.log("ID", cartState)
        dispatch(updatingCart(cartState.id, {products: productsArr, userId: userId }))}
        dispatch(fetchCart(localStorage.getItem('id')))

    }

    return (
        <>
            {products ?
                products.map((product, key) => {
                    if (product != null) {
                        return <ProductCard title={product.name}
                        description={product.description}
                        icon={""}
                        price={product.price}
                        buttonValue="Add to Cart"
                        onclick={() => addToCart(product._id)}
                        key={key}
                        id={product._id}>
                       <img src={product.image}/>
                        </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Products;

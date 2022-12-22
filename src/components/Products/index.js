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

    function addToCart(e, id) {
        productsArr.push(id);
        e.preventDefault();
        if(cartState.id === undefined){
            console.log('CREATE', cartState)
            dispatch(creatingCart({products: productsArr, userId: userId }))
            dispatch(fetchCart(localStorage.getItem('id')))

        }else{
            console.log("ID", productsArr, userId)
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
                        onclick={(e) => addToCart(e,product._id)}
                        key={key}
                        id={product._id}>
                       <img src="https://www.nicepng.com/png/detail/443-4431327_png-file-fa-fa-product-icon.png" width={150}/>
                        </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Products;

import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { useSelector } from "react-redux";

function Cart(props) {

    const { cart, products } = props;

    useEffect(()=>{
        console.log(cart)
    },[])

    return (
        <>
            {cart && products.length > 0 ?
                    cart.map((productId, key) =>{
                     let product = products.find(({ _id }) => _id === productId);
                    if (product !== undefined) {
                        console.log(product)
                        return <ProductCard title={product.name}
                            description={product.description}
                            icon={""}
                            price={product.price}
                            buttonValue="Remove"
                            onclick={() => { }}
                            key={key}>
                            <img src={product.image} />
                        </ProductCard>
                    }})
                : <></>}
        </>
    )
}

export default Cart;

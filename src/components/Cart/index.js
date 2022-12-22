import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { useSelector } from "react-redux";

function Cart(props) {

    const { cart, products } = props;

    let cartProducts = [];

    function getCartProducts() {
        let result = cart.map(productId => {
            return products.map(product => {
                if (product._id == productId) cartProducts.push(product)
            })
        });
    }

    useEffect(() => {
        getCartProducts();
        console.log(cart)

    }, [cartProducts])

    return (
        <>
            {products ?
                    cart.map((productId, key) =>{
                     let product = products.find(({ _id }) => _id === productId);
                    if (product !== null) {
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

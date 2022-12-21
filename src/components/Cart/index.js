import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';

function Cart(props) {

    const { products } = props;

    return (
        <>
            {products ?
                products.map((episode, key) => {
                    if (episode != null) {
                        return <ProductCard title="title"
                        description="description"
                        buttonValue="Remove"
                        key={1}> </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Cart;

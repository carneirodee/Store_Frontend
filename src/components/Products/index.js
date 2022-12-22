import React, { useState, useEffect } from 'react';
import { updatingCart } from '../../actions/cart.actions';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../ProductCard';

function Products(props) {

    const { products } = props;

    const dispatch = useDispatch();

    function updateCart() {
        dispatch(updatingCart())
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
                        onclick={() => updateCart()}
                        key={key}>
                       <img src={product.image}/>
                        </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Products;

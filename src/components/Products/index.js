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
                products.map((episode, key) => {
                    if (episode != null) {
                        return <ProductCard title={episode.name}
                        description={episode.description}
                        icon={""}
                        price={episode.price}
                        buttonValue="Add to Cart"
                        onclick={() => updateCart()}
                        key={key}>
                       <img src={episode.image}/>
                        </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Products;

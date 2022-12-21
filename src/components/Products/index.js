import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';

function Products(props) {

    const { episodes } = props;

    return (
        <>
            {episodes ?
                episodes.map((episode, key) => {
                    if (episode != null) {
                        return <ProductCard title="title"
                        description="description"
                        buttonValue="Add to Cart"
                        key={1}> </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Products;

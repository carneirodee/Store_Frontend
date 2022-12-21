import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';

function Products(props) {

    const { products } = props;

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
                        key={1}>
                       <img src={episode.image}/>
                        </ProductCard>
                    }
                })
                : <></>}
        </>
    )
}

export default Products;

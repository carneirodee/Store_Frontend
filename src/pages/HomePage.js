import React, { useEffect } from 'react';
import { Container } from '../components/commons/containers';
import Aside from '../containers/Aside';
import { useDispatch, useSelector } from "react-redux";

function Home(props) {

  const cartState = useSelector(state => state.cartReducer)

  const { products, logged} = props;

  useEffect(() => {
    console.log('Cart',cartState)
  }, [])

    return (
      <Container>
        <Aside products={products} logged={logged} cart={cartState}/>
      </Container>
    );
  }
export default Home;

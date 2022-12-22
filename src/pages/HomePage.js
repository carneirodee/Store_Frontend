import React, { useEffect } from 'react';
import { Container } from '../components/commons/containers';
import Aside from '../containers/Aside';

function Home(props) {


  const { products, logged, cart} = props;

    return (
      <Container>
        <Aside products={products} logged={logged} cart={cart}/>
      </Container>
    );
  }
export default Home;

import React from 'react';
import { Container } from '../components/commons/containers';
import Header from '../containers/Header';
import Aside from '../containers/Aside';
import Footer from '../containers/Footer';

function Home(props) {

  const {cast, synopsis, images, title, products, genres, year } = props;

    return (
      <Container>
        <Aside products={products} />
      </Container>
    );
  }
export default Home;

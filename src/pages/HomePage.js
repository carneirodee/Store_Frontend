import React from 'react';
import { Container } from '../components/commons/containers';
import Header from '../containers/Header';
import Aside from '../containers/Aside';
import Footer from '../containers/Footer';

function Home(props) {

  const {cast, synopsis, images, title, episodes, genres, year } = props;

    return (
      <Container image={`'${images.Background}'`}>
        <Header title={title} genres={genres} year={year} />
        <Aside episodes={episodes} />
        <Footer cast={cast} synopsis={synopsis} />
      </Container>
    );
  }
export default Home;

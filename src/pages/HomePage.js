import React from 'react';
import { Container } from '../components/commons/containers';
import Header from '../containers/Header';
import Aside from '../containers/Aside';
import Footer from '../containers/Footer';

function Home(props) {

  const {cast, synopsis, images, title, episodes, genres, year } = props;

    return (
      <Container image={`'${images.Background}'`}>
        <Aside episodes={episodes} />
      </Container>
    );
  }
export default Home;

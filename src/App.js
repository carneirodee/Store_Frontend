import './App.css';
import React, { useEffect } from 'react';
import { Container } from './components/commons/containers';
import { fetchEpisodes } from './actions/episodes.actions';
import { fetchInfo } from './actions/info.actions';
import { useDispatch, useSelector } from "react-redux";
import Header from './containers/Header';
import Aside from './containers/Aside';
import Footer from './containers/Footer';

function App() {

  const episodesState = useSelector(state => state.episodesReducer)
  const infoState = useSelector(state => state.infoReducer)
  const dispatch = useDispatch();
  const { isLoadingInfo } = infoState;
  const { isLoadingEpisodes } = episodesState;

  useEffect(() => {
    dispatch(fetchInfo())
    dispatch(fetchEpisodes())
  }, [dispatch])

  if (isLoadingEpisodes === true && isLoadingInfo === true) {
    return (
      <h1>I am loading :)</h1>
    )
  } else {
    const { Images, Cast, Genres, Synopsis, Title, Year } = infoState.info;
    return (
      <Container image={`'${Images.Background}'`}>
        <Header title={Title} genres={Genres} year={Year} />
        <Aside episodes={episodesState.episodes} />
        <Footer cast={Cast} synopsis={Synopsis} />
      </Container>
    );
  }

}
export default App;

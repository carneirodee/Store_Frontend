import './App.css';
import React, { useEffect } from 'react';
import { fetchEpisodes } from './actions/episodes.actions';
import { fetchInfo } from './actions/info.actions';
import { useDispatch, useSelector } from "react-redux";
import HomePage from './pages/HomePage';
import Loading from './pages/Loading';

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
     <Loading/>
    )
  } else {
    const { Images, Cast, Genres, Synopsis, Title, Year } = infoState.info;
    console.log("Episodes",episodesState)
    
    return (
      <HomePage 
        cast={Cast} 
        synopsis={Synopsis} 
        images={Images} 
        title={Title} 
        year={Year} 
        episodes={episodesState.episodes} 
        genres={Genres}
      />
    );
  }

}
export default App;

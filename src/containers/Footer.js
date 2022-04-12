import React, { useState, useEffect } from 'react';
import { Container, FooterContainer, SideContainer } from './components/commons/containers';
import { Title, Subtitle } from './components/commons/titles/Titles';
import Tabs from './components/Tabs';
import General from './components/General';
import Cast from './components/Cast';
import Episodes from './components/Episodes';
import { TelecineLogo } from './assets'
import {getEpisodes, getInfo} from './api';
import { connect } from "react-redux";

function Aside() {

  const [background, setBackground] = useState('')
  const [cast, setCast] = useState([]);
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState(0);
  const [synopsis, setSynopsis] = useState('');
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getInfo()
      .then(res => {
        const { data } = res;
        const { Images, Cast, Genres, Synopsis, Title, Year } = data;
        setBackground(`${Images.Background}`);
        setTitle(Title)
        setCast(Cast)
        setGenres(Genres)
        setYear(Year)
        setSynopsis(Synopsis)
      })
      .catch(err => {
        console.log(err)
      })

      getEpisodes()
      .then(res => {
        const { data } = res;
        setEpisodes(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [background, genres, episodes])

  const sanitizeGenre = () => {
    const listGenres = genres.length > 0 ? genres.map(genre => genre.Title.toUpperCase() + " / ") : ''
    return listGenres;
  }

  const sanitizeEpisodes = (list, keyGetter) => {
    const map = new Map();
    const mapToArray = [];
    list.forEach((item) => {
      if (item != null) {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      }
    });
    for (const [key, value] of map.entries()) {
      mapToArray.push({ season: key, episodes: value });
    }

    return mapToArray;
  }

  const sanitizedEpisodes = sanitizeEpisodes(episodes, episode => episode.SeasonNumber);


  const tabs = [
    {
      title: 'General',
      component: <General synopsis={synopsis} />
    },
    {
      title: 'Elenco',
      component: <Cast cast={cast} />

    },
    {
      title: 'Premiações',
      component: <Cast cast={cast} />
    }
  ]

  const tabs1 = sanitizedEpisodes.map((epi) => {
    return {title : 'T'+ epi.season, component: <Episodes episodes={epi.episodes}/>}
  })


  const sanitizedGenre = sanitizeGenre();

  if (background === '') {
    return (
      <h1>I am loading :)</h1>
    )
  } else {
    return (
      <Container image={background}>
        <Title>{title}</Title>
        <Subtitle>80% INDICADO / {sanitizedGenre} {year} / EUA / 14</Subtitle>
        <Header/>
        <Aside/>
        <Footer/>
      </Container>
    );
  }

}
export default Aside;

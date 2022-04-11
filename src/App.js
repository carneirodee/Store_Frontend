import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, FooterContainer, SideContainer, MiniCardContainer } from './components/commons/containers';
import { Title, Subtitle } from './components/commons/titles/Titles';
import Tabs from './components/Tabs';
import axios from 'axios';
import General from './components/General';
import Cast from './components/Cast';
import PlayCard from './components/PlayCard';
import Episodes from './components/Episodes';
import {TelecineLogo} from './assets'
function App() {

  const [background, setBackground] = useState('')
  const [cast, setCast] = useState([]);
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState(0);
  const [synopsis, setSynopsis] = useState('');
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get(`https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json`)
      .then(res => {
        const { data } = res;
        const { Images, Cast, Genres, Synopsis, Title, Year } = data;
        setBackground(`${Images.Background}`);
        setTitle(Title)
        setCast(Cast)
        setGenres(Genres)
        setYear(Year)
        setSynopsis(Synopsis)
        // console.log("Background", background, "Cast", cast, "Genres", genres);
      })
      .catch(err => {
        console.log(err)
      })

    axios.get(`https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json`)
      .then(res => {
        const { data } = res;
        setEpisodes(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [background, genres, episodes])

  const getGenres = () => {
    const listGenres = genres.length > 0 ? genres.map(genre => genre.Title.toUpperCase() + " / ") : ''
    return listGenres;
  }

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

  const tabs1 = [
    {
      title: 'T1',
      component:<></>

    },
    {
      title: 'T2',
      component: <></>

    },
    {
      title: 'T3',
      component: <SideContainer><Episodes episodes={episodes} /></SideContainer>

    }
  ]

  if (background === '') {
    return (
      <h1>I am loading :)</h1>
    )
  } else {
    return (
      <Container image={background}>
        <Title>{title}</Title>
        <Subtitle>80% INDICADO / {getGenres()} {year} / EUA / 14</Subtitle>
        <SideContainer><Tabs selectedTab={"0"} tabs={tabs1}/></SideContainer>
        <FooterContainer><Tabs selectedTab={"0"} tabs={tabs} icon={<TelecineLogo/>}></Tabs>
        </FooterContainer>
      </Container>
    );
  }

}
export default App;

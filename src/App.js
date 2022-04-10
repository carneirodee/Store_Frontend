import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, FooterContainer, SideContainer } from './components/commons/containers';
import { Title, Subtitle } from './components/commons/titles/Titles';
import Tabs from './components/Tabs';
import axios from 'axios';

function App() {

  const [background, setBackground] = useState('')
  const [cast, setCast] = useState([]);
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState(0);

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
        // console.log("Background", background, "Cast", cast, "Genres", genres);
      })
      .catch(err => {
        console.log(err)
      })

  }, [background, genres])

  const getGenres = () => {
    const listGenres = genres.length > 0 ? genres.map(genre => genre.Title.toUpperCase() + " / ") : ''
    return listGenres;
  }

  // if (background === '') {
  //   return (
  //     <h1>I am loading :)</h1>
  //   )
  // } else {
  //   return (
  //     <Container image={background}>
  //       <Title>{title}</Title>
  //       <Subtitle>80% INDICADO / {getGenres()} {year} / EUA / 14</Subtitle>
  //       <SideContainer></SideContainer>
  //       <FooterContainer></FooterContainer>
  //     </Container>
  //   );
  // }
      const tabs =[
        {
          title: 'General',
          component: <div>Hi</div>
        },
        {
          title: 'Elenco',
          component: <div>Elenco</div>
        },
        {
          title: 'Premiações',
          component: <div>Premiação</div>
        }
      ]
    return (
      <Tabs selectedTab={"0"} tabs={tabs}></Tabs>
    )

}

export default App;

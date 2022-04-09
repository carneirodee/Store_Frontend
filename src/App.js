import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './components/commons/Container';
import axios from 'axios';

function App() {

  const [background, setBackground] = useState('')
  const [serieEpisodes, setSerieEpisodes] = useState({})

  useEffect(() => {
     axios.get(`https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json`)
    .then(res=>{
        console.log(res);
        setBackground(`${res.data.Images.Background}`);
        console.log("Info",background);
      
    })
    .catch(err=>{
        console.log(err)
    })

  },[background])

  if(background === ''){
    return (
      <h1>I am loading :)</h1>
    )
  }else{
   console.log(background)

    return (
      
      <Container
        image={background}
      >
        <p>HI</p>
      </Container>
    );
  }

 
}

export default App;

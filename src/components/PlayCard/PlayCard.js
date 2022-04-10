import styled from "styled-components";
import { Paragraph } from '../Synopsis/Synopsis'

export const PlayCardContainer = styled.details`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap !important ;
    background-color: black;
    color: lightgray;
    font-family: 'Nunito', cursive !important;
    
`;

export const Title = styled.summary`
    display: flex;
    align-items: start;
    vertical-align: middle;
    padding: 2vw;
    background-color: black;

    >svg{
      position: absolute;
      right: 0px;
      top: 0.1vh;
      transform: scale(0.7);
    }

`;

export const Thumbnail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 50vh;
    background-image:url(${props => props.image ? props.image : 'black'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
`;

export const ParagraphSynopsis = styled(Paragraph)`
    padding: 5vh 5vw 2vh 5vw;
`;

export const WatchProgress = styled.progress`
    width: 80%;
    height: 0.5vh;
    position: absolute;
    top: 52vh;
    z-index: 1;
    -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;

  color: blue; 
`;
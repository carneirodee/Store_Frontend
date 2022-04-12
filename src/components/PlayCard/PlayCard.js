import styled from "styled-components";
import { Paragraph } from '../Synopsis/Synopsis'
import { PlayButton } from '../../assets';

export const PlayCardContainer = styled.details`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap !important ;
    color: lightgray;
    font-family: 'Nunito', cursive !important;
    
`;

export const Summary = styled.summary`
    display: flex;
    vertical-align: middle;
    flex-direction: row;
`;

export const Title = styled.h4`
    display: flex;
    width: 25vw;
    align-self: flex-start;
    font-famiy: 'Nunito', cursive;
    margin: 2vw 0 2vh 1vw;
    @media(max-width: 800px) {
        width: 70vw;
    }

`;

export const Thumbnail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 30vh;
    background-image:url(${props => props.image ? props.image : 'black'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
`;

export const ParagraphSynopsis = styled(Paragraph)`
    padding: 2vh 2vw;
`;

export const WatchProgress = styled.progress`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 80%;
    height: 0.5vh;
    margin-bottom: 5vh;
    -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
`;

export const Play = styled(PlayButton)`
    transform: scale(0.9);
    display: flex;
    align-self: flex-end;
    padding-bottom: 2vh;
`;
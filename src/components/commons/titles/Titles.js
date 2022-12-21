import styled from "styled-components";

export const Title = styled.header`
    color: white !important;
    font-family: 'Nunito', cursive;
    font-weight: bold;
    line-height: 0.6;
    font-size: 10vh;
    margin: 4vh 5vw 0 5vw;
    @media(max-width: 800px) {
        font-size: 8vh;
        line-height: 8vh;
        margin-bottom: 5vh;

    }

    @media(max-width: 550px) {
        font-size: 5vh;
        line-height: 5vh;
        margin-bottom: 1vh;

    } 
`;

export const Subtitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-content: flex-end;
    color: rgb(180, 180, 180)  !important;
    font-family: 'Nunito', sans-serif;
    font-weight: lighter;
    font-size: 1.3vw;
    margin: 3vh 5vw 0 5vw;
    @media(max-width: 800px) {
        position: absolute;
        top: 10vh;
        margin-top: 5vh;
        font-size: 2vh;
        line-height: 2vh;

    } 
    @media(max-width: 550px) {
        position: absolute;
        top: 8vh;
    } 
`;


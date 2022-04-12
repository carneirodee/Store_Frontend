import styled from "styled-components";

export const SynopsisContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2vw;
    background-color: black;
    @media(max-width: 800px) {
       display: none;
        }
`;

export const Title = styled.h2`
    display: flex;
    margin: 0;
    color: white;
    line-heigth: 1px;
    font-family: 'Nunito', cursive;
    font-weight: lighter;
    color: gray;
`;

export const Paragraph = styled.p`
    color: white;
    margin: 0;
    font-family: 'Nunito', cursive;
    line-heigth: 1px;
    font-weight: lighter;
    color: gray;
`;
import styled from "styled-components";

export const SetsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: black;
    width: 50vw;
    color: gray;
    @media(max-width: 800px) {
        width: 100vw;
        }
`;

export const SetItem = styled.a`
    color: white;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    align-items: center;
    text-decoration: none;
    padding: 2vh 2vw;
    color: gray;
    font-family: 'Nunito', cursive;
    font-size: 2vh;
    >svg{
        margin: 0.5vw 0.5vh;
    }
    ${props => props.actived && `
    color: green;
    g , path{
        stroke: green
      };
    circle {
        fill: green
    }
      `}
`;
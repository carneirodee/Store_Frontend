import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    background-color: white ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

    @media(max-width: 800px) {
        flex-direction: row;
        width: auto;
      }
`;

export default Container;
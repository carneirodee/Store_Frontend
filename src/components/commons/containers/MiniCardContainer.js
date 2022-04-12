
import styled from "styled-components";

export const CastContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 15vh;
    margin: 2vw;
    color: gray;
    background-color: rgb(20, 20 ,20);
    @media(max-width: 800px) {
        height: 10vh;
        padding: 1vw 1vh;
        text-align: center;
      }
`;

export default CastContainer;
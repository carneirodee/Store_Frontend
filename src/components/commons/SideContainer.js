import styled from "styled-components";

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-content: flex-end;
    width: 20vw;
    height: 50vh;
    padding: 3vh 5vw;
    position: absolute;
    top: 10vh;
    background-color: rgba(0,0,0, 0.5);
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: flex-end;
    width: 90%;
    height: 20vh;
    padding: 3vh 5vw;
    position: absolute;
    bottom: 0vh;    
    background-color: rgba(18,18,18, 1)
`;

export default SideContainer;
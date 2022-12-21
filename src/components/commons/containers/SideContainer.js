import styled from "styled-components";

export const SideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: flex-start;
    width: 30vw;
    height: 58vh;
    position: absolute;
    top: 10vh;
    margin-left: 5vw;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 1px;
      }
    ::-webkit-scrollbar-thumb {
        background: transparent; 
      }
      @media(max-width: 1024px) {
        align-self: center;
        left: 10vw;
        top: 20vh;
        width: 80vw;
        height: 58vh;
      }

      @media(max-width: 450px) {
        left: 5vw;
        width: 90vw;

      }
    `;

export default SideContainer;
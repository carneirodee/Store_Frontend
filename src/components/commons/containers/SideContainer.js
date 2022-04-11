import styled from "styled-components";

export const SideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-content: flex-start;
    width: 30vw;
    height: 58vh;
    position: absolute;
    top: 10vh;
    margin-right: 5vw;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 1px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: transparent; 
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: transparent; 
      }
    `;

export default SideContainer;
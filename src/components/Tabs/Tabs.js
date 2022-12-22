import styled from "styled-components";

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
`;

export const TabsNav = styled.nav`
    display:flex;
    flex-wrap: wrap;
    border-bottom: 0.005rem gray solid;
    width: auto;
    padding: 0;
    >svg{
        position: absolute;
        right: 0;
     }
     @media(max-width: 800px) {
        >svg{
            display: none;
         }
      }
      @media(max-width: 450px) {
        >svg{
           display: none;
         }
      }
`;

export const TabsPanel = styled.div`
    display: flex;
    flex-direction: column;
    color: gray;
`;

export const Tab = styled.a`
    display: flex;
    padding: 1vw 1vw 1vw 1vw;
    font-family: 'Nunito', cursive;
    font-size: 2.2vh;
    font-weight: bold;
    vertical-align: text-bottom;
    text-decoration: none; 
    text-align: center;
    color: black;
    @media(max-width: 450px) {
        font-size: 3.5vw;

      }
    ${(props) => props.dataKey === props.selected ? `border-bottom: 3px black solid; color: gray; margin-bottom: -2px;` : `border: none`}
    
`;

export const TabItem = styled.div`
    flex-wrap: wrap;
    width: 100vw;
    height: 95vh;
    overflow-y: scroll;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    ${(props) => props.position?
        `justify-content: center;
            align-items: center;` : 
        `justify-content: flex-start;
        align-items: flex-start;`}
    ${(props) => props.dataKey === props.visibility ? `display: flex;` : `display: none`}
    
`;

export const Span = styled.h1`
    width: 2vh
    flex-wrap: wrap;
    justify-self: flex-end;
    align-items: flex-end;
`;
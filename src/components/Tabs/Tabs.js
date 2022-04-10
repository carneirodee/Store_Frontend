import styled from "styled-components";

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TabsNav = styled.div`
    display:flex;
    flex-wrap: wrap;
    border-bottom: 0.005rem gray solid;
    width: auto;
    padding: 0;

`;

export const TabsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 2vw 0vw;
    color: lightgray;
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
    color: gray;
    ${(props) => props.dataKey === props.selected ? `border-bottom: 3px green solid; color: white; margin-bottom: -2px;` : `border: none`}

`;

export const TabItem = styled.div`
    ${(props) => props.dataKey === props.visibility ? `display: flex` : `display: none`}
    
`;
import styled from "styled-components";

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 5px green solid;
    padding: 0 1vh 0 1vh;

`;

export const TabsNav = styled.div`
    display:flex;
    flex-wrap: wrap;
    border: 5px pink solid;
    width: auto;
    padding: 0 2vw;

`;

export const TabsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 5px black solid;
    padding: 2vw 2vw;
`;

export const Tab = styled.a`
    display: flex;
    margin: 1px 1vw;
    padding: 1vw 2vw;
    border 5px blue solid;
`;

export const TabItem = styled.div`
    ${(props) => props.dataKey === props.visibility ? `display: flex` : `display: none`}
    
`;
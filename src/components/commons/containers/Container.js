import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    ${props => props.image ? `background-image:  radial-gradient(circle closest-corner at 40% 30%, rgba(0, 0, 0, 0.5) 10%, rgba(0,0,0, 1)  98%), 
    url(${props.image});` : `background-color: black`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

`;

export default Container;
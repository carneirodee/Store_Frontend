import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    background-image:  radial-gradient(circle closest-corner at 50% 30%, rgba(0, 0, 0, 0.5) 10%, rgba(0,0,0, 1)  98%), 
    url(${props => props.image ? props.image : 'black'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

`;

export default Container;
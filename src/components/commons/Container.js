import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.image ? props.image : 'black'});

`;

export default Container;
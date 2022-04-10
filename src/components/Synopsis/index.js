import React, { useState, useEffect } from 'react';
import { SynopsisContainer, Title , Paragraph} from './Synopsis';

function Synopsis(props) {


    return (
        <SynopsisContainer>
            <Title>SINOPSE</Title>
            <Paragraph>{props.synopsis}</Paragraph>
        </SynopsisContainer>
    )
}

export default Synopsis;

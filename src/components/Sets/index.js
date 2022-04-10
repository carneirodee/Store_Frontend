import React, { useState, useEffect } from 'react';
import { SetsContainer, SetItem } from './Sets';
import { AddButton, SadButton, RecButton, ShareButton } from '../../assets/index';

function Sets(props) {

    return (
        <SetsContainer>
            <SetItem href="#">
                <AddButton />
                Favoritar
            </SetItem>
            <SetItem href="#">
                <SadButton />
                Avaliar
            </SetItem>
            <SetItem href="#">
                <RecButton />
                Gravar
            </SetItem >
            <SetItem href="#">
                <ShareButton />
                Compartilhar
            </SetItem>
        </SetsContainer>
    )
}

export default Sets;

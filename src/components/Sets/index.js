import React, { useState, useEffect } from 'react';
import { SetsContainer, SetItem } from './Sets';
import { AddButton, HappyButton, SadButton, RecButton, ShareButton, MinusButton } from '../../assets/index';

function Sets() {

    const [addToList, setAddToList] = useState(false);
    const [rate, setRate] = useState(false);
    const [recordOn, setRecordOn] = useState(false);
    const [shareOn, setShare] = useState(false);

    const addToFavorites = () => {
        setAddToList(!addToList);
    }

    const likeTVShow = () => {
        setRate(!rate);
    }

    const showModalRecord = () => {
        setRecordOn(!recordOn);
    }

    const onShare = () => {
        setShare(!shareOn);
    }
    return (
        <SetsContainer>

            <SetItem actived={!addToList} onClick={() => addToFavorites()} href="#">
                {addToList ?
                    <>
                        <MinusButton />
                        Desfarovitar
                    </>

                    :
                    <>
                        <AddButton />
                        Favoritar
                    </>}

            </SetItem>
            <SetItem actived={rate} onClick={() => likeTVShow()} href="#">
                {rate ?
                    <>
                        <HappyButton />
                        Gostei
                    </>

                    :
                    <>
                        <SadButton />
                        Não Gostei
                    </>}
            </SetItem>
            <SetItem actived={recordOn} onClick={() => showModalRecord()} href="#">
                <RecButton />
                Gravar
            </SetItem >
            <SetItem actived={shareOn} onClick={() => onShare()} href="#">
                <ShareButton />
                Compartilhar
            </SetItem>
        </SetsContainer>
    )
}

export default Sets;

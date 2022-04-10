import React, { useState, useEffect } from 'react';
import { PlayCardContainer, Title, Thumbnail, ParagraphSynopsis, WatchProgress } from './PlayCard';
import { PlayButton } from '../../assets';

function PlayCard(props) {

    return (
        <PlayCardContainer>
            <Title>Summary <PlayButton /> </Title>
            <Thumbnail image={'https://picsum.photos/id/237/536/354'}>
                <WatchProgress id="file" value="30" max="100" />
            </Thumbnail>
            <ParagraphSynopsis>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ParagraphSynopsis>
        </PlayCardContainer>
    )
}

export default PlayCard;

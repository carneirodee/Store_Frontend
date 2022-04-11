import React, { useState, useEffect } from 'react';
import { PlayCardContainer, Summary, Thumbnail, ParagraphSynopsis, WatchProgress, Title, Play } from './PlayCard';

function PlayCard(props) {

    const { episodeData } = props
    const { Title: title, Image, Synopsis, EpisodeNumber: numberEpi } = episodeData;
    return (
        <PlayCardContainer>
            <Summary>
                <Title>{numberEpi + ' ' + title}</Title>
                <Play />
            </Summary>
            <Thumbnail image={Image}>
                <WatchProgress id="file" value="30" max="100" />
            </Thumbnail>
            <ParagraphSynopsis>{Synopsis}</ParagraphSynopsis>
        </PlayCardContainer>
    )
}

export default PlayCard;

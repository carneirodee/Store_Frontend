import React, { useState, useEffect } from 'react';
import PlayCard from '../PlayCard';

function Episodes(props) {

    const { episodes } = props;

    return (
        <div>
            {episodes ?
                episodes.map((episode, key) => {
                    if (episode != null) {
                        return <PlayCard key={key} episodeData={episode} />
                    }
                })
                : <></>}
        </div>
    )
}

export default Episodes;

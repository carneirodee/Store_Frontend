import React, { useState, useEffect } from 'react';
import { MiniCardContainer } from '../commons/containers';
import Sets from '../Sets';
import Synopsis from '../Synopsis';

function Cast(props) {

    const {cast } = props;

    return (
        <>
            {cast.map((actor, key) =>{
                console.log(actor)
                return <MiniCardContainer key={key}>{actor.Name}</MiniCardContainer>
            })}
        </>
    )
}

export default Cast;

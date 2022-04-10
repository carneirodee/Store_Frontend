import React, { useState, useEffect } from 'react';
import Sets from '../Sets';
import Synopsis from '../Synopsis';

function General(props) {

    return (
        <>
            <Sets/>
            <Synopsis synopsis={props.synopsis}></Synopsis>
        </>
    )
}

export default General;

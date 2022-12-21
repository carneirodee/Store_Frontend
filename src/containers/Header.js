import React from 'react';
import { Title, Subtitle } from '../components/commons/titles/Titles';

function Header(props) {

    const {title, genres, year} = props;

    const sanitizeGenre = () => {
        const listGenres = genres.length > 0 ? genres.map(genre => genre.Title.toUpperCase() + " / ") : ''
        return listGenres;
    }
    const sanitizedGenre = sanitizeGenre();

    return (
        <>
            <Subtitle>80% INDICADO / {sanitizedGenre} {year} / EUA / 14</Subtitle>
        </>

    );

}


export default Header;


import React, { useState, useEffect } from 'react';
import { Title, Subtitle } from './components/commons/titles/Titles';
import { connect } from "react-redux";
import { getInfo } from "../actions/info.actions";

function Header(props) {

    const [title, setTitle] = useState('');
    const [genres, setGenres] = useState([]);
    const [year, setYear] = useState(0);

    useEffect(() => {
        getInfo();
        const { data } = props;
        const { Genres, Title, Year } = data;
        setTitle(Title);
        setGenres(Genres);
        setYear(Year);
    }, [title, genres, year]);

    const sanitizeGenre = () => {
        const listGenres = genres.length > 0 ? genres.map(genre => genre.Title.toUpperCase() + " / ") : ''
        return listGenres;
    }

    const sanitizedGenre = sanitizeGenre();

    return (
        <>
            <Title>{title}</Title>
            <Subtitle>80% INDICADO / {sanitizedGenre} {year} / EUA / 14</Subtitle>
        </>

    );

}

const mapStateToProps = (state, props) => {
    return {
        info: props.info
    };
};
const mapDispatchToProps = {
    getInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


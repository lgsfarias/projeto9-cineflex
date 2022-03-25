import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from '../services/Api.js';

import MoviePoster from './MoviePoster';
import LoadingScreen from './LoadingScreen';

const Main = (props) => {
    const { setOrder, setScreen } = props;
    const [movies, setMovies] = useState();

    useEffect(() => {
        setOrder({
            ids: [],
            name: '',
            cpf: '',
            title: '',
            date: '',
            time: '',
        });
        setScreen('main');

        Api.get('movies')
            .then((res) => setMovies(res.data))
            .catch(console.log);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MainContainer>
            <div className="header">
                <h1>Selecione o filme</h1>
            </div>
            {movies ? (
                <div className="posters">
                    {movies?.map((movie) => {
                        const { id, posterURL, title } = movie;
                        return (
                            <MoviePoster
                                posterURL={posterURL}
                                title={title}
                                id={id}
                                key={id}
                            />
                        );
                    })}
                </div>
            ) : (
                <LoadingScreen mensagem={'Carregando filmes em cartaz ...'} />
            )}
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.main`
    position: fixed;
    top: 67px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    padding-bottom: 150px;

    .header {
        /* position: sticky; */
        height: 100px;
        background: #fff;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .posters {
        display: flex;
        flex-wrap: wrap;
    }
`;

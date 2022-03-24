import React, { useState, useEffect } from 'react';
import Api from '../../services/Api.js';

import './Main.css';
import Loading from '../../assets/img/Spin-1s-200px.svg';
import MoviePoster from '../MoviePoster/MoviePoster';

const Main = () => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        Api.get('movies')
            .then((res) => setMovies(res.data))
            .catch(console.log);
    }, []);
    return (
        <main>
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
                <div className="loading">
                    <img src={Loading} alt="loading gif" />
                    <p>Carregando filmes em cartaz ...</p>
                </div>
            )}
        </main>
    );
};

export default Main;

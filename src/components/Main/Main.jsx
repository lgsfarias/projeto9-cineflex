import React, { useState, useEffect } from 'react';
import Api from '../../services/Api.js';

import './Main.css';
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
            <div className="posters">
                {movies?.map(({ id, posterURL, title }) => (
                    <MoviePoster posterURL={posterURL} title={title} key={id} />
                ))}
            </div>
        </main>
    );
};

export default Main;

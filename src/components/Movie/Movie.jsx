import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Loading from '../../assets/img/Spin-1s-200px.svg';
import Api from '../../services/Api';

import './Movie.css';

const Movie = () => {
    const [showtimes, setShowtimes] = useState({});
    const { MovieId } = useParams();

    useEffect(() => {
        Api.get(`movies/${MovieId}/showtimes`)
            .then((res) => {
                setShowtimes(res.data);
            })
            .catch(console.log);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="Movie">
            <div className="header">
                <h1>Selecione o horário</h1>
            </div>
            {showtimes.days ? (
                <div className="days">
                    {showtimes.days.map((day) => (
                        <div className="day" key={day.id}>
                            <h1>
                                {day.weekday} - {day.date}
                            </h1>
                            <div className="showtimes">
                                {day.showtimes.map((showtime) => (
                                    <Link
                                        className="button"
                                        to={`/sessao/${showtime.id}`}
                                        key={showtime.id}
                                    >
                                        {showtime.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <footer>
                        <div className="selectedMovie">
                            <img
                                src={showtimes.posterURL}
                                alt={showtimes.title}
                            />
                        </div>
                        <div className="description">
                            <p>{showtimes.title}</p>
                        </div>
                    </footer>
                </div>
            ) : (
                <div className="loading">
                    <img src={Loading} alt="loading gif" />
                    <p>Carregando lista de sessões ...</p>
                </div>
            )}
        </div>
    );
};

export default Movie;

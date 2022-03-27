import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Api from '../services/Api';

// import './Movie.css';

const Movie = (props) => {
    const { setScreen } = props;
    const [showtimes, setShowtimes] = useState({});
    const { MovieId } = useParams();

    useEffect(() => {
        setScreen('movies');

        Api.get(`movies/${MovieId}/showtimes`)
            .then((res) => {
                setShowtimes(res.data);
            })
            .catch(console.log);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <MovieContainer>
            <div className="header">
                <h1>Selecione o horário</h1>
            </div>
            {showtimes.days ? (
                <div className="days">
                    {showtimes.days.map((day) => (
                        <Day key={day.id}>
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
                        </Day>
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
                <LoadingScreen mensagem={'Carregando lista de sessões ...'} />
            )}
        </MovieContainer>
    );
};

export default Movie;

const MovieContainer = styled.div`
    position: fixed;
    top: 67px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    padding-bottom: 117px;

    .header {
        height: 100px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-bottom: 25px;

    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 20px;
        color: #293845;
    }

    .showtimes {
        display: flex;

        .button {
            width: 83px;
            height: 43px;
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 18px;
            color: #ffffff;
            background: #e8833a;
            border-radius: 3px;
            border: none;
            margin-right: 10px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .button:hover,
        .button:focus {
            opacity: 0.8;
            transform: translateY(-3px);
        }
    }
`;

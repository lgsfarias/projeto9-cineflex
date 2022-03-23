import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';

import './Movie.css';

const Movie = () => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        Api.get('movies/1/showtimes')
            .then((res) => setDays(res.data.days))
            .catch(console.log);
    }, []);
    return (
        <div className="Movie">
            <div className="header">
                <h1>Selecione o horário</h1>
            </div>
            {days?.map((day) => (
                <div className="day" key={day.id}>
                    <h1>
                        {day.weekday} - {day.date}
                    </h1>
                    <div className="showtimes">
                        {day.showtimes.map((showtime) => (
                            <Link to="/sessao" key={showtime.id}>
                                <button>{showtime.name}</button>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Movie;

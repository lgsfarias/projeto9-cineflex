import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Api from '../../services/Api';

import './Session.css';

const Session = () => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        Api.get('showtimes/1/seats')
            .then((res) => setSeats(res.data.seats))
            .catch(console.log);
    }, []);
    return (
        <div className="Session">
            <div className="header">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="seats">
                {seats?.map(({ id, name, isAvailable }) => (
                    <div
                        className={
                            isAvailable ? 'seat available' : 'seat unavailable'
                        }
                        key={id}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <div className="subTitles">
                <div>
                    <div className="seat selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="seat available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="seat unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="form">
                <p>Nome do comprador:</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome..."
                />
                <p htmlFor="CPF">CPF do comprador:</p>
                <input type="text" name="CPF" placeholder="Digite seu CPF..." />
            </div>
            <div className="button-container">
                <button>Reservar assento(s)</button>
            </div>
        </div>
    );
};

export default Session;

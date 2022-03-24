import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from '../../assets/img/Spin-1s-200px.svg';
import Api from '../../services/Api';
import Seat from '../Seat/Seat';

import './Session.css';

const Session = (props) => {
    const { order, setOrder } = props;
    const [seatsData, setSeatsData] = useState({});
    const { ShowtimeId } = useParams();
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        Api.get(`showtimes/${ShowtimeId}/seats`)
            .then((res) => setSeatsData(res.data))
            .catch(console.log);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (order.ids.length !== 0 && order.name !== '' && order.cpf !== '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [order]);

    return (
        <div className="Session">
            <div className="header">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            {seatsData.seats ? (
                <div className="seats">
                    {seatsData.seats.map(({ id, name, isAvailable }) => (
                        <Seat
                            isAvailable={isAvailable}
                            name={name}
                            key={id}
                            id={id}
                            order={order}
                            setOrder={setOrder}
                        />
                    ))}

                    <footer>
                        <div className="selectedMovie">
                            <img
                                src={seatsData.movie.posterURL}
                                alt={seatsData.movie.title}
                            />
                        </div>
                        <div className="description">
                            <p>{seatsData.movie.title}</p>
                            <p>
                                {seatsData.day.weekday} {seatsData.name}
                            </p>
                        </div>
                    </footer>
                </div>
            ) : (
                <div className="loading">
                    <img src={Loading} alt="loading gif" />
                    <p>Carregando filmes em cartaz ...</p>
                </div>
            )}
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
                    onChange={(e) =>
                        setOrder({ ...order, name: e.target.value })
                    }
                    type="text"
                    name="name"
                    placeholder="Digite seu nome..."
                />
                <p htmlFor="CPF">CPF do comprador:</p>
                <input
                    onChange={(e) =>
                        setOrder({ ...order, cpf: e.target.value })
                    }
                    type="text"
                    name="CPF"
                    placeholder="Digite seu CPF..."
                />
            </div>
            <div className="button-container">
                <Link
                    to="/sucesso"
                    className={disable ? 'button disabled' : 'button'}
                >
                    <p>Reservar assento(s)</p>
                </Link>
            </div>
        </div>
    );
};

export default Session;

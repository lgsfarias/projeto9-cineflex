import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import LoadingScreen from './LoadingScreen';
import Api from '../services/Api';
import Seat from './Seat';

const Session = (props) => {
    const { order, setOrder, setScreen } = props;
    const [seatsData, setSeatsData] = useState({});
    const { ShowtimeId } = useParams();
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        setScreen('session');
        Api.get(`showtimes/${ShowtimeId}/seats`)
            .then((res) => {
                setSeatsData(res.data);
                setOrder({
                    ...order,
                    title: res.data.movie.title,
                    date: res.data.day.date,
                    time: res.data.name,
                });
            })
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
        <SessionContainer>
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
                <LoadingScreen
                    mensagem={'Carregando assentos disponíveis ...'}
                />
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
        </SessionContainer>
    );
};

export default Session;

const SessionContainer = styled.div`
    position: fixed;
    top: 67px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    padding: 0 20px 150px 20px;

    .header {
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
    .seats {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
        max-width: 390px;
        margin: 0 auto;
    }

    .seat {
        width: 26px;
        height: 26px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .selected {
        background: #8dd7cf;
        border: 1px solid #1aae9e;
    }

    .available {
        background: #c3cfd9;
        border: 1px solid #808f9d;
    }

    .unavailable {
        background: #fbe192;
        border: 1px solid #f7c52b;
    }
    .subTitles {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        max-width: 390px;
        margin: 40px auto;
    }
    .subTitles > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .subTitles > div p {
        margin-top: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 13px;
        color: #4e5a65;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .form p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    .form input {
        height: 51px;
        background: #ffffff;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        margin-bottom: 10px;
        padding-left: 15px;
        outline: none;
    }

    input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #afafaf;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    .button {
        width: 225px;
        height: 42px;
        background: #e8833a;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        align-self: center;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    .button.disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    .Session .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Session .loading p {
        margin-top: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

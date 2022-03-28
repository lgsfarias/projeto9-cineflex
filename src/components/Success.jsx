import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Success = (props) => {
    const { setScreen } = props;
    const { state } = useLocation();

    useEffect(() => {
        setScreen('success');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SuccessContainer>
            <div className="header">
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className="infos">
                <div className="info">
                    <p>Filme e sessão</p>
                    <div className="description">
                        <p>{state.title}</p>
                        <p>
                            {state.date} {state.time}
                        </p>
                    </div>
                </div>
                {state.compradores.map((comprador) => (
                    <div key={comprador.idAssento} className="info">
                        <p>
                            Assento{' '}
                            {comprador.idAssento % 50 === 0
                                ? 50
                                : comprador.idAssento % 50}
                        </p>
                        <div className="description">
                            <p>Nome: {comprador.nome}</p>
                            <p>CPF: {comprador.cpf}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/" className="button">
                <p>Voltar pra Home</p>
            </Link>
        </SuccessContainer>
    );
};

export default Success;

const SuccessContainer = styled.div`
    position: fixed;
    top: 67px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    padding: 0 20px 150px 20px;
    display: flex;
    flex-direction: column;

    .header {
        height: 100px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #247a6b;
    }
    .infos {
        display: flex;
        flex-direction: column;

        .info {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;

            p {
                font-family: 'Roboto';
                font-weight: 700;
                font-size: 24px;
                color: #293845;
                margin-bottom: 10px;
            }

            .description {
                display: flex;
                flex-direction: column;

                p {
                    font-family: 'Roboto';
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 26px;
                    color: #293845;
                    margin-bottom: 0;
                }
            }
        }
    }

    .button {
        align-self: center;
        width: 225px;
        height: 42px;
        background: #e8833a;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-top: 50px;
    }

    .button:hover,
    .button:focus {
        transform: translateY(-3px);
    }
`;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Success = (props) => {
    const { order, setScreen } = props;

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
                        <p>{order.title}</p>
                        <p>
                            {order.date} {order.time}
                        </p>
                    </div>
                </div>
                <div className="info">
                    <p>Ingressos</p>
                    <div className="description">
                        {order.ids.map((item) => (
                            <p key={item}>
                                Assento {item % 50 !== 0 ? item % 50 : 50}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="info">
                    <p>comprador</p>
                    <div className="description">
                        <p>Nome: {order.name}</p>
                        <p>
                            CPF: {order.cpf.slice(0, 3)}.{order.cpf.slice(3, 6)}
                            .{order.cpf.slice(6, 9)}-{order.cpf.slice(9, 11)}
                        </p>
                    </div>
                </div>
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
`;

import React from 'react';
import styled from 'styled-components';

const Costumer = (props) => {
    const { order, setOrder, id } = props;

    function cpfMask(value) {
        return value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        // function source -- https://medium.com/trainingcenter/mascara-de-cpf-com-react-javascript-a07719345c93
    }

    return (
        <CostumerContainer>
            <p className="seat-description bold">
                {' '}
                Assento {id % 50 === 0 ? 50 : id % 50}
            </p>
            <label htmlFor="name">Nome do comprador:</label>
            <input
                onChange={(e) => {
                    const indexComprador = order.compradores.findIndex(
                        (comprador) => comprador.idAssento === id
                    );
                    order.compradores[indexComprador].nome = e.target.value;
                    setOrder({ ...order });
                }}
                type="text"
                name="name"
                value={
                    order.compradores[
                        order.compradores.findIndex(
                            (comprador) => comprador.idAssento === id
                        )
                    ].nome
                }
                placeholder="Digite seu nome ..."
                required
            />
            <label htmlFor="CPF">CPF do comprador:</label>
            <input
                onChange={(e) => {
                    const indexComprador = order.compradores.findIndex(
                        (comprador) => comprador.idAssento === id
                    );
                    order.compradores[indexComprador].cpf = cpfMask(
                        e.target.value
                    );
                    setOrder({ ...order });
                }}
                type="text"
                name="CPF"
                value={
                    order.compradores[
                        order.compradores.findIndex(
                            (comprador) => comprador.idAssento === id
                        )
                    ].cpf
                }
                minLength="14"
                maxLength="14"
                placeholder="Digite seu CPF (somente números)..."
                required
            />
        </CostumerContainer>
    );
};

export default Costumer;

const CostumerContainer = styled.div`
    width: 100%;
    max-width: 390px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 20px;
    background-color: #dfe6ed;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    .seat-description {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        margin-bottom: 20px;
    }

    .bold {
        font-weight: 700;
    }

    label {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        height: 51px;
        background: #ffffff;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        margin-bottom: 10px;
        padding-left: 15px;
        outline: none;
    }
`;

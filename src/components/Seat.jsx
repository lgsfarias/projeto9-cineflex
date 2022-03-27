import React, { useState } from 'react';

const Seat = ({ isAvailable, name, order, setOrder, id }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div
            onClick={() => {
                if (isAvailable) {
                    setIsSelected(!isSelected);

                    let index = order.ids.indexOf(id);
                    if (index > -1) {
                        const indiceComprador = order.compradores.findIndex(
                            (comprador) => comprador.idAssento === id
                        );
                        if (
                            order.compradores[indiceComprador].nome !== '' ||
                            order.compradores[indiceComprador].cpf !== ''
                        ) {
                            const confirmation = window.confirm(
                                `Gostaria realmente de remover o assento ${
                                    id % 50 === 0 ? 50 : id % 50
                                } e apagar os dados vinculados a ele?`
                            );
                            if (confirmation) {
                                order.ids.splice(index, 1);
                                order.compradores = order.compradores.filter(
                                    (comprador) => comprador.idAssento !== id
                                );
                            }
                        } else {
                            order.ids.splice(index, 1);
                            order.compradores = order.compradores.filter(
                                (comprador) => comprador.idAssento !== id
                            );
                        }
                    } else {
                        order.ids.push(id);
                        order.ids.sort((a, b) => a - b);
                        order.compradores.push({
                            idAssento: id,
                            nome: '',
                            cpf: '',
                        });
                    }
                    setOrder({ ...order });
                } else {
                    alert('Este assento não está disponível');
                }
            }}
            className={
                isSelected
                    ? 'seat selected'
                    : isAvailable
                    ? 'seat available'
                    : 'seat unavailable'
            }
        >
            {name}
        </div>
    );
};

export default Seat;

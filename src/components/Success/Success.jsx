import React, { useEffect } from 'react';

import Api from '../../services/Api';
import './Success.css';

const Success = (props) => {
    const { order } = props;

    useEffect(() => {
        Api.post('seats/book-many', order).then(console.log).catch(console.log);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Success">
            <div className="header">
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className="infos">
                <div className="info">
                    <p>Filme e sessão</p>
                    <div className="description">
                        <p>Enola Holmes</p>
                        <p>24/06/2021 15:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;

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
                        order.ids.splice(index, 1);
                    } else {
                        order.ids.push(id);
                    }
                    setOrder({ ...order });
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

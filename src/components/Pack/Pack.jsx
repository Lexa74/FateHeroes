import React from "react";
import './pack.css';

export const Pack = () => {
    const countCards = 30; // Высчитывать в будущем

    return (
        <div className="pack">
            Количество карт: <div>{countCards}</div>
        </div>
    )
}
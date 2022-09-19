import React from "react";
import './card.css'

export const Card = ({power}) => {
    


    return (
        <div className="card-content">
            Сила: <strong>{power}</strong>
        </div>
    )
}
import React from "react";
import './input.css';

export const Input = (props) => {

    return (
        <input className="input" type={props.type} placeholder={props.placeholder} value={props.value} onInput={(e) => props.onInput(e.target.value)}/>
    )
}
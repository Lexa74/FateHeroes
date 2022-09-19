import React from "react";
import './button.css'

export const Button = (props) => {


    return (
        <button className={"button-" + props.direction}>{props.name}</button>
    )
}
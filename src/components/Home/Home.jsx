import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const Home = () => {


    return  (
        <div className="">
            <Link to='/create-player'><Button name="Создать игрока"></Button></Link>
        </div>
    )
  }
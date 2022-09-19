import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import './home.css'

export const Home = () => {


    return  (
        <div className="main-menu">
            <Link to='/playboard'><Button name="Начать игру" direction='main'></Button></Link>
            <Link to='/'><Button name="Выход" direction='main'></Button></Link>
        </div>
    )
  }
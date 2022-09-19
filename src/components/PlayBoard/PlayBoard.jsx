import React from "react";
import { Card } from "../Card/Card";
import { Pack } from "../Pack/Pack";
import { GameInfo } from "../GameInfo/GameInfo";
import './playboard.css';
import { Button } from "../UI/Button/Button";

export function PlayBoard() {


    return  (
        <div className="playboard">
            <div className="playboard__navigation navigation">
                <div className="playboard__game-info">
                    <GameInfo numberRound={1} scorePlayer={0} scoreEnemy={0}/>
                </div>
                <div className="playboard__pack">
                    <Pack></Pack>
                </div>
            </div>
            <div className="playboard__cards">
                <div className="playboard__enemy-cards">
                    <p className="playboard__label">Карты противника:</p>
                    <div className="cards-container">
                        <Card power={5}></Card>
                        <Card power={2}></Card>
                    </div>
                </div>
                <div className="playboard__my-cards">
                    <p className="playboard__label">Карты игрока:</p>
                    <div className="cards-container">
                        <Card power={4}></Card>
                        <Card power={8}></Card>
                    </div>
                </div>
            </div>
            <div className="playboard__finish-round">
                <Button name={'Завершить раунд'} onClick={() => {}}></Button>
            </div>
        </div>
    )
  }


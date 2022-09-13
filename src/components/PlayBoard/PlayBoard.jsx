import React from "react";

export function PlayBoard() {


    return  (
        <div className="playboard">
            <div className="playboard__player player">
                <div className="player__info">info</div>
                <div className="game-info">
                    В колоде карт: 1
                    На доске карт: 2
                    Сумма атаки: 3
                    Сумма защиты: 5
                </div>
                <div className="card-board">
                    <div className="card-in-hands"></div>
                    <div className="card-stack"></div>
                </div>
                <div className="playboard__player info">info</div>
            </div>
            <div className="playboard__enemy">Enemy</div>
        </div>
    )
  }


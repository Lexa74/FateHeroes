import React from 'react';
import './game-info.css';



export const GameInfo = ({numberRound, scorePlayer, scoreEnemy}) => {


    return (
        <div className='game-info'>
            <div className='game-info__item'>Номер раунда {numberRound}</div>
            <div className='game-info__item'>Счет игрока {scorePlayer}</div>
            <div className='game-info__item'>Счет противника {scoreEnemy}</div>
        </div>
        
    )
}
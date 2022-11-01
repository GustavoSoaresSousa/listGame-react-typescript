import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartGameConteiner } from '../../styles/cartGameStyle';

import { IGame } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';

export function CartGame(){
  const { game, games, setGameId } = useGame();
  const navigate = useNavigate();

  function setId(id: number): void {
    setGameId(id);
    navigate('/game');
  }

  return(
    <CartGameConteiner>
      {
        (game.length >= 1 ? game : games).map((data: IGame) => {
          return <div key={ data.id } onClick={() => setId(data.id)} className='div-content'>
            <div className='add-fav'><button>+</button></div>
            <img src={data.thumbnail} alt=""/>
            <div>{data.title}</div>
            <div className='plataform'>{data.platform}</div>
          </div>
        })
      }

    </CartGameConteiner>
  )
}
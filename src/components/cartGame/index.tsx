import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartGameConteiner } from '../../styles/cartGameStyle';

import { IGame } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';
import { myAPI } from '../../service/api';
import { Loading } from '../loading';

export function CartGame(){
  const { game, games, setGameId, removeLoading } = useGame();
  const navigate = useNavigate();

  function setId(id: number): void {
    setGameId(id);
    navigate('/game');
  }

  async function addFavorite(id: number, title: string): Promise<void>{
    const token = window.localStorage.getItem('tokenUserAuthenticate');
    if(!token){
      window.alert("Only users can use Favorites, please do login")
      navigate('/logIn');
    }
    const response = await myAPI.post('/gameList/putGameInFavs', {
      id: id,
      title: title,
    });
  }

  return(
    <CartGameConteiner>
      {
        (game.length >= 1 ? game : games).map((data: IGame) => {
          return <div key={ data.id }  className='div-content'>
            <div className='add-fav'><button onClick={() => addFavorite(data.id, data.title)}>+</button></div>
            <img src={data.thumbnail} onClick={() => setId(data.id)} alt=""/>
            <div>{data.title}</div>
            <div className='plataform'>{data.platform}</div>
          </div>
        })
      }
      {!removeLoading && <Loading />}
    </CartGameConteiner>
  )
}
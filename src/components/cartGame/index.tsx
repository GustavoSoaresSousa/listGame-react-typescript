import React, { useState, useEffect } from 'react';
import { CartGameConteiner } from '../../styles/cartGameStyle';
import { myAPI } from '../../service/api';
import { IGame } from '../../contexts/GameContext';

export function CartGame(){
  const [games, setGames] = useState<IGame[]>([]);
  console.log(games)
  useEffect(() => {
    async function getAllGames(): Promise<void>{
      const response = await myAPI.get('/gameList/allGames');
      setGames(response.data)
    }
    getAllGames();
  }, [])

  return(
    <CartGameConteiner>
      {
        games.map((data: IGame) => {
          return <div key={ data.id } className='div-content'>
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
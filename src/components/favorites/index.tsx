import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGame } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';
import { myAPI } from '../../service/api';
import { CartGameConteiner } from '../../styles/cartGameStyle';
import { Loading } from '../loading';

export function Favorites() {
  const [gamesFavorites, setGamesFavorites] = useState<IGame[]>([]);
  const { setGameId, removeLoading } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem('tokenUserAuthenticate');
    if(!token){
      window.alert("Only users can use Favorites, please do login")
      navigate('/logIn');
    }
    async function getFavs(): Promise<void> {
      const response = await myAPI.get('/gameList/getfavs');
      setGamesFavorites(response.data);
    }
    getFavs();
  }, [])

  function setId(id: number): void {
    setGameId(id);
    navigate('/game');
  } 
  // components loading

  return (
    <CartGameConteiner>
      {
        gamesFavorites.map((data: IGame) => {
          return <div key={data.id} onClick={() => setId(data.id)} className='div-content'>
            <div className='add-fav'><button>X</button></div>
            <img src={data.thumbnail} alt="" />
            <div>{data.title}</div>
            <div className='plataform'>{data.platform}</div>
          </div>
        })
      }
      {!removeLoading && <Loading />}
      {removeLoading && gamesFavorites.length === 0 && (
        <p>Not exists favorites</p>
      )}
    </CartGameConteiner>
  )
}
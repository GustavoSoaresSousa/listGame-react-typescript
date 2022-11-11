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
  }, [gamesFavorites]);

  function setId(id: number): void {
    setGameId(id);
    navigate('/game');
  } 

  async function deleteFavorite(id: number, title: string): Promise<void>{
    window.alert('Favorite removed');
    const response = await myAPI.post('/gameList/deleteFav', {
      id: id,
      title: title
    })
  } 

  return (
    <CartGameConteiner>
      {
        gamesFavorites.map((data: IGame) => {
          return <div key={data.id} className='div-content'>
            <div className='add-fav'><button onClick={() => deleteFavorite(data.id, data.title)}>X</button></div>
            <img onClick={() => setId(data.id)} src={data.thumbnail} alt="" />
            <div>{data.title}</div>
            <div className='plataform'>{data.platform}</div>
          </div>
        })
      }
      {!removeLoading && <Loading />}
      {removeLoading && gamesFavorites.length === 0 && (
        <p>don't exists favorites</p>
      )}
    </CartGameConteiner>
  )
}
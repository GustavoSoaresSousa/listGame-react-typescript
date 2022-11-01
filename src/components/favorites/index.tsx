import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGame } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';
import { myAPI } from '../../service/api';
import { CartGameConteiner } from '../../styles/cartGameStyle';

export function Favorites() {
  const [gamesFavorites, setGamesFavorites] = useState<IGame[]>([]);
  const { setGameId } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
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

  // se não estiver logado exibir a tela de login ou exibir mensagem]
  // fazer operador ternário e exibir tela de login se usuário não estiver logado, ou não deixa o botão aparecer;.

  return (
    <CartGameConteiner>
      {
        gamesFavorites.map((data: IGame) => {
          return <div key={data.id} onClick={() => setId(data.id)} className='div-content'>
            <div className='add-fav'><button>+</button></div>
            <img src={data.thumbnail} alt="" />
            <div>{data.title}</div>
            <div className='plataform'>{data.platform}</div>
          </div>
        })
      }
    </CartGameConteiner>
  )
}
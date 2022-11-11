import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../hooks/useGame';
import { SearchContainer } from '../../styles/searchStyle';

export function Search(){
  const [nameGame, setNameGame] = useState('');
  const {searchGameByName, games} = useGame();
  const navigate = useNavigate();

  function searchGame(e?: FormEvent){
    e?.preventDefault()
    if(!nameGame) return // alert para escrever alguma coisa
    const result = searchGameByName(nameGame);
    if(result === false) return;
    navigate('/explore')
  }

  return(
      <SearchContainer>
        <div className="div-container" > 
          <form onSubmit={searchGame}>
          <div className="input-search">
          <input className='input-content' value={nameGame} onChange={(e) => setNameGame(e.target.value)} type="text" placeholder="Search game" />
          </div>
          <button type='submit' className="emoji-search">🔍</button>            
          </form>
        </div>
      </SearchContainer>
  )
}
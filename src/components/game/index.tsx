import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { IGame } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';
import { myAPI } from '../../service/api';
import { GameConteiner } from '../../styles/GameStyle';

export function Game() {
  const { gameId } = useGame();
  const [game, setGame] = useState([]);
  const [imgs, setImgs] = useState<string[]>([]);

  useEffect(() => {
    async function getGame(): Promise<void> {
      const response = await myAPI.post('/gameList/game', { // quando recarrega a pagina perde a informação, fazer esse useEffect no context para ver se resolve, se não fazer clone no anime list e ver como eu resolvi
        id: gameId
      })

      setGame(response.data);
      getImg();
    }
    getGame();
  })

  function getImg(): void {
    const imgs = game.map((data: IGame) => data.screenshots)
    const newArrayOfImgs = [];
    for (const img of imgs) {
      for (const image of img) {
        newArrayOfImgs.push(image.image)
      }
    }
    setImgs(newArrayOfImgs)
  }

  return (
    <GameConteiner>
      <div className='game-container'>
        {
          game.map((data: IGame) => {
            return <div className='info-content' key={data.id}>
              <label>Title</label>
              <p>{data.title}</p>
              <img src={data.thumbnail} alt="" />
              <br />
              <label>Genre</label>
              <p>{data.genre}</p>
              <label>Publisher</label>
              <p>{data.publisher}</p>
              <label>Developer</label>
              <p>{data.developer}</p>
              <label>Description</label>
              <div className='info-description'>{data.short_description}</div>
            </div>
          })
        }

        <Carousel indicators={false} fade className='w-50'>
          {
            imgs.map((img: string) => {
              return <Carousel.Item  key={img} className='w-100 carrosel-content'>
                <img
                  className="w-100"
                  src={img}
                  alt="First slide"
                />
              </Carousel.Item>
            })


          }
          
        </Carousel>
      </div>

    </GameConteiner>
  )
}
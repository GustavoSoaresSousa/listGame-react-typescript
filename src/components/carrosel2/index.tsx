import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGame } from '../../hooks/useGame';
import { IGame } from '../../contexts/GameContext';
import { Card, Carousel } from 'react-bootstrap';
import { myAPI } from '../../service/api';
import { CartItemSideContainer } from '../../styles/cartItemSide';
import { CarroselConteiner } from '../../styles/carroselStyle';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../loading';



export function SecondCarrosel() {
  const { games, setGameId, removeLoading } = useGame();
  const navigate = useNavigate();
  function setId(id: number): void {
    setGameId(id);
    navigate('/game');
  }
  

  return (
    <CarroselConteiner>
      <Carousel fade className='w-50 carrosel-container'>
        {
          games?.slice(5, 15).map((data: IGame) => {
            return <Carousel.Item key={data.id} className='carrosel-content' onClick={() => setId(data.id)}>
              <img
                className=""
                src={data.thumbnail}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{data.platform}</p>
              </Carousel.Caption>
            </Carousel.Item>
          })
        }
        {!removeLoading && <Loading />}
      </Carousel>
      <CartItemSideContainer>
          {
            games?.slice(103, 105).map((data:IGame) => {
            return <><Card  className='card-content' onClick={() => setId(data.id)} bg="dark" text={'white'} style={{ width: '18rem' }}>
                <Card.Img key={data.id} className='card-img' variant="top" src={data.thumbnail} />
                <Card.Body >
                    <Card.Title>{data.title}</Card.Title>
                </Card.Body></Card>            
            </>
            })
          }
          {!removeLoading && <Loading />}
        </CartItemSideContainer>
    </CarroselConteiner>
  )
}
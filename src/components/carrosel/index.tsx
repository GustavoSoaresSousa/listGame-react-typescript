import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../hooks/useGame';
import { IGame } from '../../contexts/GameContext';
import { CarroselConteiner } from '../../styles/carroselStyle';
import { Card, Carousel } from 'react-bootstrap';
import { CartItemSideContainer } from '../../styles/cartItemSide';
import { Loading } from '../loading';

export function Carrosel() {

  const { games, setGameId, removeLoading } = useGame();
  const navigate = useNavigate();

  function setId(id: number): void {
    setGameId(id);
    navigate('/game');
  }
  
  return (
    <CarroselConteiner>
      <Carousel fade className='w-50'>
        {
          games?.slice(25, 35).map((data: IGame) => {
            return <Carousel.Item className='w-100 carrosel-content' onClick={() => setId(data.id)}>
            <img
              className="w-100"
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
            games?.slice(100, 103).map((data:IGame) => {
            return <><Card className='card-content' onClick={() => setId(data.id)} bg="dark" text={'white'} style={{ width: '18rem' }}>
                {/* <div className='add-fav'><button>+</button></div> */}
                <Card.Img className='card-img' variant="top" src={data.thumbnail} />
                <Card.Body>
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
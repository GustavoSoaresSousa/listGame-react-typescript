import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGame } from '../../hooks/useGame';
import { IGame } from '../../contexts/GameContext';
import { Card, Carousel } from 'react-bootstrap';
import { myAPI } from '../../service/api';
import { CartItemSideContainer } from '../../styles/cartItemSide';
import { CarroselConteiner } from '../../styles/carroselStyle';



export function SecondCarrosel() {
  const { games } = useGame();

  return (
    <CarroselConteiner>
      <Carousel fade className='w-50'>
        {
          games?.slice(5, 15).map((data: IGame) => {
            return <Carousel.Item key={data.id} className='w-100 carrosel-content'>
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
      </Carousel>
      <CartItemSideContainer>
          {
            games?.slice(103, 105).map((data:IGame) => {
            return <><Card  className='card-content' bg="dark" text={'white'} style={{ width: '18rem' }}>
                <Card.Img key={data.id} className='card-img' variant="top" src={data.thumbnail} />
                <Card.Body >
                    <Card.Title>{data.title}</Card.Title>
                </Card.Body></Card>            
            </>
            })
          }
        </CartItemSideContainer>
    </CarroselConteiner>
  )
}
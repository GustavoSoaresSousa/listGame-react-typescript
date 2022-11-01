import React from 'react'
import { Footer } from '../components/footer'
import { Game } from '../components/game'
import { Header } from '../components/header'

export function GamePage(){
  return(
    <>
      <Header />
      <Game />
      <Footer />
    </>
  )
}
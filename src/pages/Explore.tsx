import React from 'react';
import { CartGame } from '../components/cartGame';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Search } from '../components/search';

export function Explore(){
  return(
    <>
      <Header />
      <Search />
      <CartGame />
      <Footer />
    </>
  )
}
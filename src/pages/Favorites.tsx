import React from 'react';
import { Favorites } from '../components/favorites';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export function FavoritePage(){
  return(
    <>
      <Header />
      <Favorites />
      <Footer />
    </>
  )
}
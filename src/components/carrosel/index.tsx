import React, { useState, useEffect } from 'react';
import { useGame } from '../../hooks/useGame';
import { CarroselConteiner } from '../../styles/carroselStyle';
import img from '../../images/1.jpg';
import img2 from '../../images/2.jpg'; 
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';

export function Carrosel(){
  const {games} = useGame();
  return(
    <CarroselConteiner>
      <div className='content'>
        <div className='slides'>
            <input type="radio" name='slide'  id='slide1'/>
            <input type="radio" name='slide'  id='slide2'/>
            <input type="radio" name='slide'  id='slide3'/>
            <input type="radio" name='slide'  id='slide4'/>
            <input type="radio" name='slide'  id='slide5'/>

            <div className="slide s1">
                <img src={img} alt="" />
            </div>

            <div className="slide s2">
              <img src={img2} alt="" />
            </div>

            <div className="slide s3">
              <img src={img3} alt="" />
            </div>

            <div className="slide s4">
              <img src={img4} alt="" />
            </div>

            <div className="slide s5">
              <img src={img5} alt="" />
            </div>
        </div>

        <div className='navigation'>
          <label className='bar' htmlFor="slide1"></label>
          <label className='bar' htmlFor="slide2"></label>
          <label className='bar' htmlFor="slide3"></label>
          <label className='bar' htmlFor="slide4"></label>
          <label className='bar' htmlFor="slide5"></label>
        </div>
      </div>

    </CarroselConteiner>
  )
}
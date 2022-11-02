import React from 'react';
import loadinfSvg from '../../images/loading.svg';
import { LoadingContainer } from '../../styles/loading';

export function Loading(){
  return(
    <LoadingContainer>
      <img className='loader' src={loadinfSvg} alt="" />
    </LoadingContainer>
  )
}
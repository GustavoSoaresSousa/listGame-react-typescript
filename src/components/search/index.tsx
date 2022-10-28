import React from 'react';
import { SearchContainer } from '../../styles/searchStyle';

export function Search(){
  return(
      <SearchContainer>
        <div className="div-container"> 
          <div className="emoji-search">🔍</div> 
          <div className="input-search"><input type="text" placeholder="Search game" /></div>
        </div>
      </SearchContainer>
  )
}
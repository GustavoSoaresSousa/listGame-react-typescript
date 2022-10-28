import React from "react";
import { HeaderContainer } from "../../styles/headerStyle";
import { Search } from "../search";

export function Header(){
  return(
    <HeaderContainer>
      <nav>
        <div className="options">
          <ul>
            <li><a>List game</a> </li>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="#">Favs</a></li>
          </ul>      
        </div>


        <div className="signs">
          <ul>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  )
}
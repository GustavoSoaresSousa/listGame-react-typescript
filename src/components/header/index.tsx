import React from "react";
import { HeaderContainer } from "../../styles/headerStyle";

export function Header() { // ser estiver logaado fazer os signs ser sig out
  const token = window.localStorage.getItem('tokenUserAuthenticate');

  function logOut():void {
    window.localStorage.removeItem('tokenUserAuthenticate')
  }

  return (
    <HeaderContainer>
      <nav>
        <div className="options">
          <ul>
            <li><a>List game</a> </li>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/favorites">Favorites</a></li>
          </ul>
        </div>


        <div className="signs">
          <ul>
            {!token ? (
              <>
              <li><a href="/logIn">Log In</a></li>
              <li><a href="/register">Create Account</a></li>
              </>
            ) : (
            <li><a onClick={() => logOut()} href="/">Log Out</a></li>
          )}
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  )
}
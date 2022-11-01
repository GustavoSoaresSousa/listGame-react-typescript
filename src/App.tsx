import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle'
import { Main } from './pages/Main';
import { Explore } from './pages/Explore';
import { GameContextProvider } from './contexts/GameContext';
import { GamePage } from './pages/Game';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import { UserContextProvider } from './contexts/UserContext';
import { FavoritePage } from './pages/Favorites';


function App() {
  return (
    <Router>
      <GameContextProvider>
        <UserContextProvider>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/game' element={<GamePage />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/logIn' element={<LogIn />} />
            <Route path='/favorites' element={<FavoritePage />} />
          </Routes>
        </UserContextProvider>
      </GameContextProvider>

    </Router>
  );
}

export default App;

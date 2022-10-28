import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle'
import { Main } from './pages/Main';
import { Explore } from './pages/Explore';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
      <GlobalStyle />
    </Router>
      
   
   

  );
}

export default App;

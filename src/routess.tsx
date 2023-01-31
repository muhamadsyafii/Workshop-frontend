/*
 * Created by Muhamad Syafii
 * Monday, 30/01/2023
 * Learning Week FrontEnd Developer
 * Copyright (c) 2023 by Moladin.
 * All Rights Reserved
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';

const Routess: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemonName" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;

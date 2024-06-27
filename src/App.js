import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Swap from './Pages/Swap';
import Farm from './Pages/Farm';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/swap' exact element={<Swap />}></Route>
          <Route path='/farm' exact element={<Farm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

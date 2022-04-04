import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUPPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage/>} />
        <Route path='shop' element={<ShopPage/>} />
        <Route path='signin' element={<SignInAndSignUPPage/>} />
      </Route>
    </Routes>
  );
}
  
  


export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import SignInAndSignUPPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage/>} />
        <Route path='shop' element = {<Shop/>} />
        <Route path='signin' element={<SignInAndSignUPPage/>} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}
  
  


export default App;

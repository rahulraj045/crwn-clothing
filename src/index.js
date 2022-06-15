import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartContextProvider } from './contexts/cart.context';
import './index.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


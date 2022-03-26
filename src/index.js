import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.scss';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
import { CartProvider } from './context/cart.context';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

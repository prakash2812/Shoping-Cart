import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import CartProvider from './context/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);

import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default GlobalRoutes;

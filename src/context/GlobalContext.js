import React, { createContext, useReducer, useContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
const CartContext = createContext();
export const CartState = () => useContext(CartContext);
const GlobalContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const initialState = { products, cart: [] };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default GlobalContext;

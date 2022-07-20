import React from 'react';
import { CartState } from '../context/GlobalContext';
import SingleProduct from './SingleProduct';
const Home = () => {
    const {
        state: { products },
    } = CartState();
    return (
        <div>
            {products.map((product) => {
                return <SingleProduct product={product} />;
            })}
        </div>
    );
};

export default Home;

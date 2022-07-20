import React from 'react';
import CartState from '../context/GlobalContext';
const Home = () => {
  console.log('data got', CartState());
  /*  const {
        state: { products },
    } = contextData(); */
  return (
    <div>
      {/* {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                    </div>
                );
            })} */}
    </div>
  );
};

export default Home;

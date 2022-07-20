import React from 'react';

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div key={product.id}>
        <h1>{product.name}</h1>
      </div>
    </div>
  );
};

export default SingleProduct;

import React from 'react';
import { useParams } from 'react-router-dom';

function Products() {
  const { brand, model } = useParams();
  return (
    <div>
      <h4>{brand}</h4>
      <h4>{model}</h4>
    </div>
  );
}

export default Products;

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { findProduct } from '../utils';
import SizeBtn from './SizeBtn';

function SingleProduct({ name, image, brand, price, _id, countInStock }) {
  const { addToCart, cart } = useGlobalContext();
  const [selectedSize, setSelectedSize] = useState('');

  const addBtn = useRef(null);

  useEffect(() => {
    const inCart = findProduct(cart, _id, selectedSize);
    if (!selectedSize) {
      addBtn.current.disabled = true;
      addBtn.current.innerText = 'Add to cart';
    }
    if (selectedSize && inCart.length === 0) {
      addBtn.current.disabled = false;
      addBtn.current.innerText = 'Add to cart';
    }
    if (selectedSize && inCart.length !== 0) {
      addBtn.current.disabled = true;
      addBtn.current.innerText = 'In cart';
    }
  }, [selectedSize]);

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.classList.contains('size-btn')) {
        setSelectedSize('');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  const handleAdd = () => {
    if (selectedSize) {
      const item = { id: _id, size: selectedSize };
      addToCart(item);
      setSelectedSize('');
    }
  };

  const getSelectedSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <article className="product">
      <div className="img-container">
        <img src={image[0]} alt={name} />
        <div className="functional-buttons">
          <button>Show Details</button>
          <button ref={addBtn} className="add-btn" onClick={handleAdd}>
            Add to cart
          </button>
        </div>
        <div className="size-buttons">
          {countInStock.map((item) => {
            if (item.qty > 0) {
              return (
                <SizeBtn
                  key={item.size}
                  {...item}
                  getSelectedSize={getSelectedSize}
                />
              );
            }
          })}
        </div>
        <h3>{name}</h3>
        <h3>{brand}</h3>
        <h4>${price}</h4>
      </div>
    </article>
  );
}

export default SingleProduct;

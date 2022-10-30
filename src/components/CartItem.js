import React from 'react';
import './CartItem.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../context';

function CartItem({
  image,
  price,
  name,
  _id,
  amount,
  countInStock: { size, qty },
}) {
  const { removeItem } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={image[0]} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <h4>size: {size}</h4>
        <button className="remove-btn" onClick={() => removeItem(_id, size)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn">
          <FaChevronUp />
        </button>
        <p className="amount">1</p>
        <button className="amount-btn">
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;

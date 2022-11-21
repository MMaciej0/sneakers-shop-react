import React from 'react';
import './CartItem.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../../../contexts/GlobalContext/GlobalContext';

function CartItem({
  image,
  price,
  name,
  cartID,
  amount,
  countInStock: { size },
}) {
  const { removeItem, changeAmount } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={image[0]} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <h4>size: {size}</h4>
        <button className="remove-btn" onClick={() => removeItem(cartID)}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => changeAmount(cartID, '+')}
        >
          <FaChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => changeAmount(cartID, '-')}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;

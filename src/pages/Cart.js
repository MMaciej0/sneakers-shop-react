import React from 'react';
import './Cart.css';
import CartItem from '../components/CartItem';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

function Cart() {
  const { total, cart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>
          Your cart is empty. <Link to="/">Go back shopping.</Link>
        </h2>
      </div>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your cart:</h2>
      </header>
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item._id} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <h4>
            total: <span>${total}</span>
          </h4>
        </div>
        <button className="clear-btn">clear cart</button>
      </footer>
    </section>
  );
}

export default Cart;

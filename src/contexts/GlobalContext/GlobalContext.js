import React, { useContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { products } from '../../data/data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  user: null,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTALS' });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const loginUser = (email, password) => {
    const user = { email, password };
    dispatch({ type: 'LOGIN_USER', payload: user });
  };

  const addToCart = (item) => {
    let selectedItem = {
      ...products.products.find((product) => product._id === item.id),
      amount: 1,
      cartID: uuidv4(),
    };
    selectedItem.countInStock = selectedItem.countInStock.find(
      (prod) => prod.size === item.size
    );
    dispatch({ type: 'ADD_TO_CART', payload: selectedItem });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const changeAmount = (id, operation) => {
    dispatch({ type: 'CHANGE_AMOUNT', payload: { id, operation } });
  };

  return (
    <AppContext.Provider
      value={{
        products,
        ...state,
        clearCart,
        addToCart,
        removeItem,
        changeAmount,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

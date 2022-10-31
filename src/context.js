import React, { useContext, useState, useReducer } from 'react';
import data from './data';
import { getSubmenuItems } from './utils';
import reducer from './reducer';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppContext = React.createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

export const AppProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [submenuData, setSubmenuData] = useState([]);
  const [navText, setNavText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTALS' });
  }, [state.cart]);

  const openSubmenu = (text, coordinates) => {
    const subData = getSubmenuItems(data.products, text);
    setNavText(text);
    setSubmenuData(subData);
    setLocation(coordinates);
    setShowSubmenu(true);
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addToCart = (item) => {
    let selectedItem = {
      ...data.products.find((product) => product._id === item.id),
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
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        showSidebar,
        showSubmenu,
        location,
        submenuData,
        navText,
        data,
        ...state,
        clearCart,
        addToCart,
        removeItem,
        changeAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

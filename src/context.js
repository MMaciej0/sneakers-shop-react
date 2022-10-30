import React, { useContext, useState, useReducer } from 'react';
import data from './data';
import { getSubmenuItems } from './utils';
import reducer from './reducer';

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
    };
    selectedItem.countInStock = selectedItem.countInStock.find(
      (prod) => prod.size === item.size
    );
    dispatch({ type: 'ADD_TO_CART', payload: selectedItem });
  };

  const removeItem = (id, size) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

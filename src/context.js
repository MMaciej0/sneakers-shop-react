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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

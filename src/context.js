import React, { useContext, useState } from 'react';
import data from './data';
import { getSubmenuItems } from './utils';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [submenuData, setSubmenuData] = useState([]);

  const openSubmenu = (text, coordinates) => {
    const subData = getSubmenuItems(data.products, 'sex', text);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

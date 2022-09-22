import React, { useContext, useState } from 'react';
import data from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSubmenu = (text, coordinates) => {
    const page = data.sublinks.find((link) => link.page === text);
    setPage(page);
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
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

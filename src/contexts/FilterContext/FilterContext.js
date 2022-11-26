import React, { useContext, useState, useEffect } from 'react';
import {
  products as dataProducts,
  categoriesDB,
  brandsDB,
} from '../../data/data';
import { getProductsBySex, forEachFilter } from '../../utils/filters';

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [navText, setNavText] = useState('');
  const [gender, setGender] = useState('all');
  const [categories, setCategories] = useState(categoriesDB);
  const [brands, setBrands] = useState(brandsDB);
  const [model, setModel] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let output = dataProducts;

    if (gender) {
      if (gender.toLowerCase() === 'all') {
        output = dataProducts;
      } else {
        output = getProductsBySex(output, gender);
      }
    }

    setProducts(output);
  }, [gender, categories, brands, model]);

  const openSubmenu = (text, coordinates) => {
    setNavText(text);
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
    <FilterContext.Provider
      value={{
        products,
        searchValue,
        setSearchValue,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        showSidebar,
        showSubmenu,
        location,
        navText,
        categories,
        setCategories,
        brands,
        setBrands,
        gender,
        setGender,
        setModel,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

import React, { useContext, useState, useEffect } from 'react';
import { products as dataProducts } from '../../data/data';
import { forEachFilter } from '../../utils/filters';
import { getProductsBySex, getSubmenuItems } from '../../utils/toGetProducts';

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [submenuData, setSubmenuData] = useState([]);
  const [navText, setNavText] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let output = dataProducts;

    if (selectedMenu) {
      if (selectedMenu === 'all') {
        return;
      } else {
        output = getProductsBySex(output, selectedMenu);
      }
    }
    if (selectedCategories.length) {
      output = forEachFilter(output, selectedCategories, 'category');
    }
    if (selectedBrands.length) {
      output = forEachFilter(output, selectedBrands, 'brand');
    }
    if (selectedModel) {
      output = [
        output.find(
          (item) => item.name.toLowerCase() === selectedModel.toLowerCase()
        ),
      ];
    }

    setProducts(output);
  }, [selectedMenu, selectedCategories, selectedBrands, selectedModel]);

  const openSubmenu = (text, coordinates) => {
    const subData = getSubmenuItems(products, text);
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
    <FilterContext.Provider
      value={{
        selectedMenu,
        setSelectedMenu,
        selectedCategories,
        setSelectedCategories,
        selectedBrands,
        setSelectedBrands,
        selectedModel,
        setSelectedModel,
        products,
        searchValue,
        setSearchValue,
        dataProducts,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        showSidebar,
        showSubmenu,
        location,
        submenuData,
        navText,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

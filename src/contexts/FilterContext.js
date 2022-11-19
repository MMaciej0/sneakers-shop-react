import React, { useContext, useState, useEffect } from 'react';
import data from '../data/data';
import { forEachFilter } from '../utils/filters';
import { getProductsBySex } from '../utils/toGetProducts';

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let output = data.products;

    if (selectedMenu) {
      output = getProductsBySex(output, selectedMenu);
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

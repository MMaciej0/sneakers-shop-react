import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useFilterContext();
  return (
    <div className="search__container">
      <label htmlFor="search" className="search__label">
        <FaSearch className="search__icon" />
        <input
          id="search"
          type="text"
          className="search__input"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBar;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Submenu.css';
import { categoriesDB, brandsDB } from '../../../data/data';
import SubmenuBrandItem from './SubmenuBrandItem';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';

function Submenu() {
  const { showSubmenu, location, navText, setCategories, setGender, setModel } =
    useFilterContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  const handleSelectCategory = (cat, text) => {
    // from menu user can only select one category
    const newCategories = JSON.parse(JSON.stringify(categoriesDB));
    const selectedCategory = newCategories[text].find(
      (category) => category.name.toLowerCase() === cat.toLowerCase()
    );
    selectedCategory.selected = true;
    setModel('');
    setGender(text);
    setCategories(newCategories);
  };

  return (
    <aside
      ref={container}
      className={`${showSubmenu ? 'submenu show' : 'submenu'}`}
    >
      <div className={`submenu-center ${columns}`}>
        <div className="submenu-column">
          <h4>Categories</h4>
          {navText &&
            categoriesDB[navText].map((item, index) => {
              return (
                <div key={index} className="item-container">
                  <Link
                    className="column-link"
                    to={`/products`}
                    onClick={() => handleSelectCategory(item.name, navText)}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="submenu-column">
          <h4>Brands</h4>
          {navText &&
            brandsDB[navText].map((brand, index) => {
              return <SubmenuBrandItem key={index} {...brand} />;
            })}
        </div>
      </div>
    </aside>
  );
}

export default Submenu;

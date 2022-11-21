import React, { useEffect, useRef, useState } from 'react';
import './Submenu.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../contexts/GlobalContext/GlobalContext';
import SubmenuBrandItem from './SubmenuBrandItem';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';

function Submenu() {
  const { navText, showSubmenu, location, submenuData } = useGlobalContext();

  const {
    setSelectedMenu,
    setSelectedCategories,
    setSelectedBrands,
    setSelectedModel,
  } = useFilterContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  const handleClick = (text, cat) => {
    setSelectedMenu(text);
    setSelectedCategories([cat]);
    setSelectedBrands([]);
    setSelectedModel('');
  };

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  console.log(submenuData);
  return (
    <aside
      ref={container}
      className={`${showSubmenu ? 'submenu show' : 'submenu'}`}
    >
      <div className={`submenu-center ${columns}`}>
        <div className="submenu-column">
          <h4>Categories</h4>
          {submenuData.category &&
            submenuData.category.map((item, index) => {
              return (
                <div key={index} className="item-container">
                  <Link
                    className="column-link"
                    to={`/products`}
                    onClick={() => handleClick(navText, item)}
                  >
                    {item.category}
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="submenu-column">
          <h4>Brands</h4>
          {submenuData.brand &&
            submenuData.brand.map((brand, index) => {
              return <SubmenuBrandItem key={index} {...brand} />;
            })}
        </div>
      </div>
    </aside>
  );
}

export default Submenu;

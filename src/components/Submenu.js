import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import './Submenu.css';
import SubmenuBrandItem from './SubmenuBrandItem';

function Submenu() {
  const {
    showSubmenu,
    location,
    submenuData: { category, brand },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      ref={container}
      className={`${showSubmenu ? 'submenu show' : 'submenu'}`}
    >
      <div className={`submenu-center ${columns}`}>
        <div className="submenu-column">
          <h4>Categories</h4>
          {category &&
            category.map((category, index) => {
              return (
                <div className="item-container">
                  <Link
                    className="column-link"
                    to={`/products/${category}`}
                    key={index}
                  >
                    {category}
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="submenu-column">
          <h4>Brands</h4>
          {brand &&
            brand.map((brand) => {
              return <SubmenuBrandItem key={brand.id} {...brand} />;
            })}
        </div>
      </div>
    </aside>
  );
}

export default Submenu;

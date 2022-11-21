import React from 'react';
import './Sidebar.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../contexts/GlobalContext/GlobalContext';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';

function Sidebar() {
  const { showSidebar, closeSidebar, submenuData } = useGlobalContext();
  const {
    setSelectedMenu,
    setSelectedCategories,
    setSelectedBrands,
    setSelectedModel,
  } = useFilterContext();

  const handleClick = (text) => {
    setSelectedMenu(text);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedModel('');
    closeSidebar();
  };

  return (
    <aside
      className={`${showSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-main">
          <div className="main-links">
            <Link to="/products" onClick={() => handleClick('man')}>
              man
            </Link>
            <Link to="/products" onClick={() => handleClick('woman')}>
              woman
            </Link>
            <Link to="/products" onClick={() => handleClick('sale')}>
              sales %
            </Link>
          </div>
          <div className="main-buttons">
            <Link to="/cart" onClick={closeSidebar}>
              <AiOutlineShoppingCart />
            </Link>
            <Link to="/login" onClick={closeSidebar}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

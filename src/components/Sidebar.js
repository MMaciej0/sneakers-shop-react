import React from 'react';
import '../styles/Sidebar.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Sidebar() {
  const {
    showSidebar,
    closeSidebar,
    submenuData: { category, brand },
  } = useGlobalContext();

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
            <Link to="/products/man" onClick={closeSidebar}>
              man
            </Link>
            <Link to="/products/woman" onClick={closeSidebar}>
              woman
            </Link>
            <Link to="/products/sale" onClick={closeSidebar}>
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

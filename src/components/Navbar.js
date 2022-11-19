import React from 'react';
import '../styles/Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import { useFilterContext } from '../contexts/FilterContext';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu, amount } = useGlobalContext();
  const {
    setSelectedMenu,
    setSelectedCategories,
    setSelectedBrands,
    setSelectedModel,
  } = useFilterContext();

  const displaySubmenu = (e) => {
    const btnText = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom;
    openSubmenu(btnText, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (
      !e.target.classList.contains('link-btn') ||
      e.target.classList.contains('non-sub')
    ) {
      closeSubmenu();
    }
  };

  const handleLinks = (text) => {
    setSelectedMenu(text);
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedModel('');
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="../../public/images/logo.svg" alt="LOGO" />
          </Link>
          <button className="nav-header__toggler" onClick={openSidebar}>
            <CgMenuGridR />
          </button>
        </div>
        <div className="nav-links">
          <NavLink
            to="/products"
            className="link-btn"
            onMouseOver={displaySubmenu}
            onClick={() => handleLinks('man')}
          >
            man
          </NavLink>
          <NavLink
            to="/products"
            className="link-btn"
            onMouseOver={displaySubmenu}
            onClick={() => handleLinks('woman')}
          >
            woman
          </NavLink>
          <NavLink
            to="/products"
            className="link-btn non-sub"
            onClick={() => handleLinks('sale')}
          >
            hot drops
          </NavLink>
        </div>
        <div className="nav-user">
          <NavLink className="user-login" to="/login">
            Sign In
          </NavLink>
          <NavLink to="/cart" className="user-cart">
            <p>{amount}</p>
            <AiOutlineShoppingCart />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

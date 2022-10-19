import React from 'react';
import './Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const btnText = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
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
            to="/products/man"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            man
          </NavLink>
          <NavLink
            to="/products/woman"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            woman
          </NavLink>
          <NavLink to="/products/sale" className="link-btn non-sub">
            hot drops
          </NavLink>
        </div>
        <div className="nav-user">
          <NavLink to="/cart" className="cart">
            <AiOutlineShoppingCart />
          </NavLink>
          <NavLink className="login">Sign In</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

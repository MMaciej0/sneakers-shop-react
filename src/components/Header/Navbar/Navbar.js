import React from 'react';
import './Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../../../contexts/GlobalContext/GlobalContext';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const { amount } = useGlobalContext();
  const { openSidebar, openSubmenu, closeSubmenu, setGender, setModel } =
    useFilterContext();

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

  const handleSelectGender = (gender) => {
    setGender(gender);
    setModel('');
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="./images/logo.svg" alt="LOGO" />
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
            onClick={() => handleSelectGender('man')}
          >
            man
          </NavLink>
          <NavLink
            to="/products"
            className="link-btn"
            onMouseOver={displaySubmenu}
            onClick={() => handleSelectGender('woman')}
          >
            woman
          </NavLink>
          <NavLink to="/products" className="link-btn non-sub">
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

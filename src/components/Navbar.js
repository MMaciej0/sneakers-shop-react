import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useGlobalContext } from '../context';

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const btnText = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;
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
          <a href="#">
            <img src="./images/logo.svg" alt="LOGO" />
          </a>
          <button className="nav-header__toggler" onClick={openSidebar}>
            <CgMenuGridR />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              categories
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              brands
            </button>
          </li>
          <li>
            <button className="link-btn non-sub">HOT DROPS</button>
          </li>
        </ul>
        <ul className="nav-user">
          <li>
            <button className="cart">
              <AiOutlineShoppingCart />
            </button>
          </li>
          <li>
            {/* <a href="#">
                <HiOutlineUserCircle />
              </a> */}
            <button className="login">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

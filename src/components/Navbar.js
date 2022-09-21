import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#">
            <img src="./images/logo.svg" alt="LOGO" />
          </a>
          <button className="nav-header__toggler">
            <CgMenuGridR />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">newest</button>
          </li>
          <li>
            <button className="link-btn">brands</button>
          </li>
          <li>
            <button className="link-btn">sale</button>
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

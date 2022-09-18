import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="#">
            <img src="./images/logo.svg" alt="LOGO" />
          </a>
          <button
            className="nav-header__toggler"
            onClick={() => setShowLinks(!showLinks)}
          >
            <CgMenuGridR />
          </button>
        </div>
        <div className="nav-links__container" ref={linksContainerRef}>
          {/* to change when implement react router */}
          <ul className="nav-links" ref={linksRef}>
            <li>
              <a href="#">Him</a>
            </li>
            <li>
              <a href="#">Her</a>
            </li>
            <li>
              <a href="#">Newest</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>
        <div className="nav-user">
          <ul>
            <li>
              <a href="#">
                <AiOutlineShoppingCart />
              </a>
            </li>
            <li>
              <a href="#">
                <HiOutlineUserCircle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

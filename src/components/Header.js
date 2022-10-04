import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

function Header() {
  return (
    <header>
      <Navbar />
      <Sidebar />
      <Submenu />
    </header>
  );
}

export default Header;

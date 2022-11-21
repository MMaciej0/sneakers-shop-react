import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Submenu from './Submenu/Submenu';

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

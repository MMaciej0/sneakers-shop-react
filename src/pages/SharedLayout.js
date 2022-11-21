import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalContext/GlobalContext';

function SharedLayout() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
      <Header />
      <main onMouseOver={closeSubmenu}>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;

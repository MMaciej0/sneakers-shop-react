import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context';

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

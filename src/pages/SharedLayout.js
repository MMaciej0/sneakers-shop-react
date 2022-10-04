import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;

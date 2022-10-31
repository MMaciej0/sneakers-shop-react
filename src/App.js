import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:navText" element={<Products />} />
        <Route path="products/:navText/:category" element={<Products />} />
        <Route
          path="products/:navText/:category/:brand"
          element={<Products />}
        />
        <Route
          path="products/:navText/:category/:brand/:model"
          element={<Products />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

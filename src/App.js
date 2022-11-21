import React from 'react';
import './globalStyles/App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import Error from './pages/Error/Error';
import SharedLayout from './pages/SharedLayout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

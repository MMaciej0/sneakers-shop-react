import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:brand" element={<Products />} />
        <Route path="products/:brand/:model" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

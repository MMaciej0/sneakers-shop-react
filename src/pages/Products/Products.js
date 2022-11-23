import React from 'react';
import './Products.css';
import SingleProduct from '../../components/Products/SingleProduct/SingleProduct';
import FilterNav from '../../components/Products/FilterNav/FilterNav';
import SearchBar from '../../components/Products/SearchBar/SearchBar';
import { useFilterContext } from '../../contexts/FilterContext/FilterContext';

function Products() {
  const { products, closeSubmenu } = useFilterContext();

  return (
    <div className="p-container" onMouseOver={closeSubmenu}>
      <SearchBar />
      <div className="p-row">
        <div className="p-col">
          <FilterNav />
        </div>
        <div className="p-col">
          <section className="products-center">
            {products.map((product) => {
              return <SingleProduct {...product} key={product._id} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products;

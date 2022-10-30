import React from 'react';
import './Products.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { getProductsBySex } from '../utils';
import SingleProduct from '../components/SingleProduct';

function Products() {
  const { data } = useGlobalContext();
  const { brand, model, navText, category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  useEffect(() => {
    setProducts(getProductsBySex(data.products, navText));
    if (navText.toLowerCase() === 'sale') {
      setProducts(data.products.filter((product) => product.onSale === 'true'));
    }
  }, [brand, model, navText, category]);

  useEffect(() => {
    if (brand) {
      setProducts(
        getProductsBySex(data.products, navText).filter(
          (product) => product.brand.toLowerCase() === brand.toLowerCase()
        )
      );
    }
  }, [brand, model]);

  useEffect(() => {
    if (category) {
      if (category !== 'all') {
        setProducts(
          getProductsBySex(data.products, navText).filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          )
        );
      }
    }
  }, [category]);

  useEffect(() => {
    if (model) {
      setProducts(
        getProductsBySex(data.products, navText)
          .filter(
            (product) => product.brand.toLowerCase() === brand.toLowerCase()
          )
          .filter(
            (product) => product.name.toLowerCase() === model.toLowerCase()
          )
      );
    }
  }, [model]);

  return (
    <section className="products-center">
      {products.map((product) => {
        return <SingleProduct {...product} key={product._id} />;
      })}
    </section>
  );
}

export default Products;

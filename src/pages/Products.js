import React from 'react';
import './Products.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { getProductsBySex } from '../utils';

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
  }, [navText]);

  useEffect(() => {
    if (brand) {
      setProducts(
        getProductsBySex(data.products, navText).filter(
          (product) => product.brand.toLowerCase() === brand.toLowerCase()
        )
      );
    }
  }, [brand]);

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
        const { name, image, brand, price, _id, countInStock } = product;
        return (
          <article className="product" key={_id}>
            <div className="img-container">
              <img src={image[0]} alt={name} />
              <div className="functional-buttons">
                <button>Show Details</button>
                <button className="add-btn" disabled>
                  Add to Cart
                </button>
              </div>
              <div className="size-buttons">
                {countInStock.map((item, index) => {
                  if (item.qty > 0) {
                    return <button key={index}>{item.size}</button>;
                  }
                })}
              </div>
              <h3>{name}</h3>
              <h3>{brand}</h3>
              <h4>${price}</h4>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Products;

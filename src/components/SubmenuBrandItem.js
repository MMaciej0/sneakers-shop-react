import React, { useRef, useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { useFilterContext } from '../contexts/FilterContext';

function SubmenuBrandItem({ name, image, model }) {
  const { location, navText } = useGlobalContext();
  const {
    setSelectedMenu,
    setSelectedCategories,
    setSelectedBrands,
    setSelectedModel,
  } = useFilterContext();

  const [open, setOpen] = useState(false);
  let toggleRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!toggleRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);

    return () => document.removeEventListener('click', handler);
  });

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleClick = (text, brand, model) => {
    setSelectedMenu(text);
    setSelectedCategories([]);
    setSelectedBrands(brand);
    setSelectedModel(model);
  };

  return (
    <>
      <div className="item-container">
        <Link
          to={`/products`}
          className={open ? 'column-link highlight ' : 'column-link'}
          onClick={() => handleClick(navText, [name], '')}
        >
          <img src={image} alt={name} /> {name}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(!open)}
          className={`${open ? 'chevron chevron-down' : 'chevron'}`}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={open ? 'models show' : 'models'}>
        {model.map((model, index) => {
          return (
            <Link
              to={`/products`}
              key={index}
              onClick={() => handleClick('', [], model)}
            >
              {model}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SubmenuBrandItem;

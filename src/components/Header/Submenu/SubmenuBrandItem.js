import React, { useRef, useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';
import { brandsDB } from '../../../data/data';

function SubmenuBrandItem({ name, image, model }) {
  const { location, navText, setGender, setBrands, setModel } =
    useFilterContext();

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

  const handleSelectBrand = (brandName, menuText) => {
    // from menu user can only select one brand
    const newBrands = JSON.parse(JSON.stringify(brandsDB));
    const selectedBrand = newBrands[menuText].find(
      (brand) => brand.name.toLowerCase() === brandName.toLowerCase()
    );
    selectedBrand.selected = true;
    setModel('');
    setGender(menuText);
    setBrands(newBrands);
  };

  return (
    <>
      <div className="item-container">
        <Link
          to="/products"
          className={open ? 'column-link highlight ' : 'column-link'}
          onClick={() => handleSelectBrand(name, navText)}
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
            <Link to={`/products`} key={index} onClick={() => setModel(model)}>
              {model}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SubmenuBrandItem;

import React, { useRef, useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';

function SubmenuBrandItem({ name, image, model }) {
  const { location, navText } = useFilterContext();

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

  return (
    <>
      <div className="item-container">
        <Link
          to={`/products`}
          className={open ? 'column-link highlight ' : 'column-link'}
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
            <Link to={`/products`} key={index}>
              {model}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SubmenuBrandItem;

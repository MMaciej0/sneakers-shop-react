import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SubmenuBrandItem({ id, name, image, model }) {
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

  return (
    <>
      <div className="item-container">
        <Link
          to={`/products/${name}`}
          key={id}
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
            <Link to={`/products/${name}/${model}`} key={index}>
              {model}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SubmenuBrandItem;

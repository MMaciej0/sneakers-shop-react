import React from 'react';
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SubmenuBrandItem({ id, name, image, model }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link to={`/products/${name}`} key={id}>
        <div className={open ? 'img-container highlight ' : 'img-container'}>
          <img src={image} alt={name} /> {name}
        </div>
        <button type="button" onClick={() => setOpen(!open)}>
          <BsChevronRight
            className={`${open ? 'chevron chevron-down' : 'chevron'}`}
          />
        </button>
      </Link>
      <div className={open ? 'models show' : 'models'}>
        {model.map((model, index) => {
          return <Link key={index}>{model}</Link>;
        })}
      </div>
    </>
  );
}

export default SubmenuBrandItem;

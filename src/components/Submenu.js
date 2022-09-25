import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import './Submenu.css';

function Submenu() {
  const {
    showSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;

    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns('col-3');
    } else if (links.length > 3) {
      setColumns('col-4');
    }
  }, [location, links]);

  return (
    <aside
      ref={container}
      className={`${showSubmenu ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url, img } = link;
          return (
            <a href={url} key={index}>
              {icon || <img src={img} alt={label} />}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Submenu;

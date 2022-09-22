import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import './Submenu.css';

function Submenu() {
  const {
    showSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      ref={container}
      className={`${showSubmenu ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
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

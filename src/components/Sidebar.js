import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import './Sidebar.css';
import data from '../data';

function Sidebar() {
  const { showSidebar, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${showSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {/* {data.products.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, img, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon || <img src={img} alt={label} />}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })} */}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

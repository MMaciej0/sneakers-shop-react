import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import './Sidebar.css';

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
        <div className="sidebar-links"></div>
      </div>
    </aside>
  );
}

export default Sidebar;

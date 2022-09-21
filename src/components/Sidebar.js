import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links"></div>
      </div>
    </aside>
  );
}

export default Sidebar;

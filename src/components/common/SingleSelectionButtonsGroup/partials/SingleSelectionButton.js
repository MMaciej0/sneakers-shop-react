import React, { useEffect, useRef } from 'react';
import './SingleToggleButton.css';

const SingleSelectionButton = ({ label, setSelectedValue, selectedValue }) => {
  const toggleBtn = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        !toggleBtn.current.contains(e.target) &&
        e.target.classList.contains('toggle-btn')
      ) {
        toggleBtn.current.classList.remove('selected');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  const handleClick = (label) => {
    toggleBtn.current.classList.add('selected');
    setSelectedValue(label);
  };

  return (
    <button
      className={
        selectedValue.toLowerCase() === label.toLowerCase()
          ? 'toggle-btn selected'
          : 'toggle-btn'
      }
      ref={toggleBtn}
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
};

export default SingleSelectionButton;

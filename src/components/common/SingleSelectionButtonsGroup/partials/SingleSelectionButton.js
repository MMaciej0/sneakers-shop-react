import React, { useEffect, useRef } from 'react';
import './SingleToggleButton.css';

const SingleSelectionButton = ({ label, setSelectedValue, selectedValue }) => {
  const selectionBtn = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        !selectionBtn.current.contains(e.target) &&
        e.target.classList.contains('single toggle-btn')
      ) {
        selectionBtn.current.classList.remove('selected');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  const handleClick = (label) => {
    selectionBtn.current.classList.add('selected');
    setSelectedValue(label);
  };

  return (
    <button
      className={
        selectedValue.toLowerCase() === label.toLowerCase()
          ? 'single toggle-btn selected'
          : 'single toggle-btn'
      }
      ref={selectionBtn}
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
};

export default SingleSelectionButton;

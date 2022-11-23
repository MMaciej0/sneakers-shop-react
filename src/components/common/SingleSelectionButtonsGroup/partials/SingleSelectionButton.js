import React, { useEffect, useRef } from 'react';
import './SingleToggleButton.css';

const SingleSelectionButton = ({
  label,
  value,
  setSelectedValue,
  selectedValue,
}) => {
  const selectionBtn = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        !selectionBtn.current.contains(e.target) &&
        e.target.classList.contains('single')
      ) {
        selectionBtn.current.classList.remove('selected');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  const handleClick = (value) => {
    selectionBtn.current.classList.add('selected');
    setSelectedValue(value);
  };

  return (
    <button
      className={
        selectedValue.toLowerCase() === value.toLowerCase()
          ? 'single toggle-btn selected'
          : 'single toggle-btn'
      }
      value={value}
      ref={selectionBtn}
      onClick={() => handleClick(value)}
    >
      {label}
    </button>
  );
};

export default SingleSelectionButton;

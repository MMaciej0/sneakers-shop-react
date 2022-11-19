import React, { useEffect, useRef } from 'react';

function SizeBtn({ size, getSelectedSize }) {
  const sizeBtn = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!sizeBtn.current.contains(e.target)) {
        sizeBtn.current.classList.remove('selected');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  const handleClick = (size) => {
    sizeBtn.current.classList.add('selected');
    getSelectedSize(size);
  };

  return (
    <button
      className="size-btn"
      ref={sizeBtn}
      onClick={() => handleClick(size)}
    >
      {size}
    </button>
  );
}

export default SizeBtn;

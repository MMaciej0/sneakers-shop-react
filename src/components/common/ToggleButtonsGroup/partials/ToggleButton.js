import React, { useEffect, useState } from 'react';

const ToggleButton = ({ label, selectedValue, setSelectedValue }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    selectedValue.forEach((category) => {
      if (category.toLowerCase() === label.toLowerCase()) {
        console.log(label, category);
        setSelected(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!selected) {
      setSelectedValue(
        selectedValue.filter(
          (category) => category.toLowerCase() !== label.toLowerCase()
        )
      );
    } else {
      setSelectedValue([...selectedValue, label]);
    }
  }, [selected]);

  return (
    <button
      className={selected ? 'toggle-btn selected' : 'toggle-btn'}
      onClick={() => setSelected(!selected)}
    >
      {label}
    </button>
  );
};

export default ToggleButton;

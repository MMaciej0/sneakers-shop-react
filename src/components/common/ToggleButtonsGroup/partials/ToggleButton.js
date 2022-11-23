import React, { useState, useEffect } from 'react';

const ToggleButton = ({
  name,
  selected,
  selectedNavText,
  selectedValue,
  setSelectedValue,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(false);

  useEffect(() => {
    if (selected === true) {
      setSelectedCategory(true);
    } else {
      setSelectedCategory(false);
    }
  }, [selected]);

  const handleClick = () => {
    const selectedCat = selectedValue[selectedNavText].find(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );
    if (selectedCat.selected === true) {
      selectedCat.selected = false;
    } else {
      selectedCat.selected = true;
    }

    setSelectedValue((prevState) => {
      return { ...prevState, ...selectedValue };
    });
  };

  return (
    <button
      className={selectedCategory ? 'toggle-btn selected' : 'toggle-btn'}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default ToggleButton;

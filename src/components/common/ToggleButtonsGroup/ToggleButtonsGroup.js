import React from 'react';
import ToggleButton from './partials/ToggleButton';

const ToggleButtonsGroup = ({ labels, selectedValue, setSelectedValue }) => {
  return (
    <div className="buttons-group__container">
      {/* {labels.map((label, index) => (
        <ToggleButton
          key={index}
          label={label}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ))} */}
    </div>
  );
};

export default ToggleButtonsGroup;

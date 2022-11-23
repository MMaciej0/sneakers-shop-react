import React from 'react';
import ToggleButton from './partials/ToggleButton';

const ToggleButtonsGroup = ({ data, selectedNavText, setSelectedValue }) => {
  return (
    <div className="buttons-group__container">
      {data[selectedNavText].map((item, index) => (
        <ToggleButton
          key={index}
          {...item}
          selectedNavText={selectedNavText}
          selectedValue={data}
          setSelectedValue={setSelectedValue}
        />
      ))}
    </div>
  );
};

export default ToggleButtonsGroup;

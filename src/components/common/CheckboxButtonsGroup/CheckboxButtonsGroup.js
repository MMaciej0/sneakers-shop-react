import React from 'react';
import './CheckboxButtonsGroup.css';
import CheckboxButton from './CheckboxButton';

const CheckboxButtonsGroup = ({ data, selectedNavText, setSelectedValue }) => {
  return (
    <ul className="checkbox__list">
      {data[selectedNavText].map((item) => {
        return (
          <CheckboxButton
            key={item.id}
            {...item}
            data={data}
            setData={setSelectedValue}
          />
        );
      })}
    </ul>
  );
};

export default CheckboxButtonsGroup;

import React from 'react';
import './CheckboxButton.css';

const CheckboxButton = ({ name, image }) => {
  return (
    <li className="checkbox__container">
      <label htmlFor={name}>
        <input type="checkbox" id={name} />
        {name}
      </label>
    </li>
  );
};

export default CheckboxButton;

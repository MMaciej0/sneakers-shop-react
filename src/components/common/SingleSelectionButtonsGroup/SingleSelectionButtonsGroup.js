import React from 'react';
import SingleSelectionButton from './partials/SingleSelectionButton';

const SingleSelectionButtonsGroup = ({
  labels,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <div className="buttons-group__container">
      {labels.map((label, index) => (
        <SingleSelectionButton
          key={index}
          label={label}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ))}
    </div>
  );
};

export default SingleSelectionButtonsGroup;

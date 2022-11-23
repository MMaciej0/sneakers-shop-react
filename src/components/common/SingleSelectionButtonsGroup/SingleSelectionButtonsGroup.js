import React from 'react';
import SingleSelectionButton from './partials/SingleSelectionButton';

const SingleSelectionButtonsGroup = ({
  data,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <div className="buttons-group__container">
      {data.map((item) => (
        <SingleSelectionButton
          key={item.id}
          {...item}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ))}
    </div>
  );
};

export default SingleSelectionButtonsGroup;

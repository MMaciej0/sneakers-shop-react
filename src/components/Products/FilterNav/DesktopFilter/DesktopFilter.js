import React, { useEffect } from 'react';
import './DesktopFilter.css';
import { useFilterContext } from '../../../../contexts/FilterContext/FilterContext';
import SingleSelectionButtonsGroup from '../../../common/SingleSelectionButtonsGroup/SingleSelectionButtonsGroup';
import ToggleButtonsGroup from '../../../common/ToggleButtonsGroup/ToggleButtonsGroup';
import CheckboxButtonsGroup from '../../../common/CheckboxButtonsGroup/CheckboxButtonsGroup';

function DesktopFilter() {
  const {
    dataCategories,
    gender,
    setGender,
    categories,
    setCategories,
    brands,
    setBrands,
  } = useFilterContext();

  return (
    <div className="df__container">
      <div className="dr__row">
        <h3>Gender:</h3>
        <SingleSelectionButtonsGroup
          data={[
            { id: 1, label: 'man', value: 'man' },
            { id: 2, label: 'woman', value: 'woman' },
            { id: 3, label: 'all', value: 'all' },
          ]}
          selectedValue={gender}
          setSelectedValue={setGender}
        />
      </div>
      {/* <div className="dr__row">
        <h3>Categories:</h3>
        <ToggleButtonsGroup
          data={categories}
          selectedNavText={gender}
          setSelectedValue={setCategories}
        />
      </div> */}
      <div className="dr__row">
        <h3>Brands:</h3>
        <CheckboxButtonsGroup
          data={brands}
          selectedNavText={gender}
          setSelectedValue={setBrands}
        />
      </div>
    </div>
  );
}

export default DesktopFilter;

import React from 'react';
import { useFilterContext } from '../../../../contexts/FilterContext/FilterContext';
import { getCategories } from '../../../../utils/toGetProducts';
import SingleSelectionButtonsGroup from '../../../common/SingleSelectionButtonsGroup/SingleSelectionButtonsGroup';
import './DesktopFilter.css';
import ToggleButtonsGroup from '../../../common/ToggleButtonsGroup/ToggleButtonsGroup';

function DesktopFilter() {
  const {
    dataProducts,
    selectedMenu,
    setSelectedMenu,
    selectedCategories,
    setSelectedCategories,
  } = useFilterContext();

  return (
    <div className="df__container">
      <div className="dr__row">
        <h3>Gender:</h3>
        <SingleSelectionButtonsGroup
          labels={['man', 'woman', 'all']}
          selectedValue={selectedMenu}
          setSelectedValue={setSelectedMenu}
        />
      </div>
      <div className="dr__row">
        <h3>Categories:</h3>
        <ToggleButtonsGroup
          labels={getCategories(dataProducts, selectedMenu)}
          selectedValue={selectedCategories}
          setSelectedValue={setSelectedCategories}
        />
      </div>
    </div>
  );
}

export default DesktopFilter;

import React from 'react';
import { useFilterContext } from '../../../../contexts/FilterContext';
import SingleSelectionButtonsGroup from '../../../common/SingleSelectionButtonsGroup/SingleSelectionButtonsGroup';
import './DesktopFilter.css';

function DesktopFilter() {
  const { selectedMenu, setSelectedMenu } = useFilterContext();

  return (
    <div class="df__container">
      <div className="dr__row">
        <h3>Gender:</h3>
        <SingleSelectionButtonsGroup
          labels={['man', 'woman', 'all']}
          selectedValue={selectedMenu}
          setSelectedValue={setSelectedMenu}
        />
      </div>
    </div>
  );
}

export default DesktopFilter;

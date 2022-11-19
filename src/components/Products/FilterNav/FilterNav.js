import React, { useState, useEffect } from 'react';
import DesktopFilter from './DesktopFilter/DesktopFilter';
import MobileFilter from './MobileFilter/MobileFilter';

function FilterNav() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const setWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWidth);
    return () => window.removeEventListener('resize', setWidth);
  }, [innerWidth]);

  return <>{innerWidth > 768 ? <DesktopFilter /> : <MobileFilter />}</>;
}

export default FilterNav;

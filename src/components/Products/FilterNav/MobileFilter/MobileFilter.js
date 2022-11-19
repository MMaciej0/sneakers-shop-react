import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';

function MobileFilter() {
  return (
    <>
      <button>
        <CgMenuLeft /> filter&sort
      </button>
      <div className="mobile-filter__container">
        <ul>
          {/* render  sorting properties and then onclick and show list depend on text*/}
        </ul>
      </div>
    </>
  );
}

export default MobileFilter;

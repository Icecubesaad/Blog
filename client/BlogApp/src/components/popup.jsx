import React, { useEffect } from 'react';
import { useRef } from 'react';

const Popup = ({ closeSearchBox }) => {
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        closeSearchBox();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSearchBox]);

  return (
    <div className="search-box">
      <div className="search-box-content" ref={searchBoxRef}>
        <input style={{width:"80%",height:"50px"}} className="form-control me-2 my-2" type="search" placeholder="Search" aria-label="Search" />
      </div>
    </div>
  );
};

export default Popup;

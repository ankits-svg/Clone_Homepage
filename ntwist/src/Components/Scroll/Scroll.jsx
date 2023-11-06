import React, { useState, useEffect } from 'react';
import { FaBeer } from 'react-icons/fa';

const Scroll = () => {
  const [view, setView] = useState(false);
console.log("view:",view)
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setView(true);
    } else {
      setView(false);
    }
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollButtonStyle = {
    display: view ? 'block' : 'none',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'Orange',
    color: 'white',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
  };
  return (
    <>
      {view && (
        <div style={scrollButtonStyle} onClick={handleScroll}>
          <FaBeer size={32}/>
        </div>
      )}
    </>
  );
};

export default Scroll;

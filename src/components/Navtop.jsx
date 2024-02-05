import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const prevPathnameRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevPathnameRef.current = location.pathname;
    }
  }, [location.pathname]);

  return children; 
};
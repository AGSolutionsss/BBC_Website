// ----------------------------------This page is correct ---------------------------------------

import React, { useState, useEffect } from "react";
import Header1 from '../header/Header1';

export default function Navbar1(props) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


}



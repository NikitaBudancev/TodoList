import React from 'react';
import arrow from '../img/arrow-alt-circle-up.svg';

const ScrollToTop = () => (
  <a href="http://google.com" className="scroll__top">
    <img className="scroll__top-image" src={arrow} alt="arrow top" />
  </a>
  );

export default ScrollToTop;

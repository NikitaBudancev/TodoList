import React from 'react';
import arrow from '../img/arrow-alt-circle-up.svg';

const ScrollToTop = () => {
  return (
    <a href="#" className="scroll__top">
      <img className="scroll__top-image" src={arrow} alt="arrow top" />
    </a>
  );
};

export default ScrollToTop;

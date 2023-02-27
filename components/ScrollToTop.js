import React from "react";
import { BiUpArrowCircle } from "react-icons/bi";

const ScrollToTop = () => {
  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={scrollToTopHandler} className="scroll-to-top-btn">
      <BiUpArrowCircle className="icon-lg" />
    </div>
  );
};

export default ScrollToTop;

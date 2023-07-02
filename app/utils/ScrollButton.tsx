"use client";

import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let hightToHideen = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hightToHideen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <div className=" xl:px-32 px-5 sm:px-14  lg:px-[50px]   relative">
      {isVisible && (
        <button
          onClick={goToBtn}
          className=" cursor-pointer bg-secoundary text-white p-2 rounded-full animate-bounce fixed bottom-10 z-50 right-10 "
        >
          <BiUpArrowAlt size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;

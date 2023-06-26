import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import sveIcon1 from "../../images/sve-icon4.png";
import sveIcon2 from "../../images/sve-icon5.png";
import sveIcon3 from "../../images/sve-icon6.png";
import HeroCarasol from "./HeroCarasol";

const Hero = () => {
  return (
    <div className="   overflow-hidden  relative ">
      <HeroCarasol />

      <div className=" md:absolute bottom-0 z-40 mt-[80px] md:mt-0    ">
        <div className=" px-5 sm:px-14 md:px-32 mx-auto flex flex-col md:flex-row  items-center justify-center gap-x-10 ">
          <div className=" md:bg-primary/75 bg-primary p-7 hover:bg-secoundary transition  cursor-pointer ">
            <div className=" flex md:flex-row flex-col items-center justify-center text-center md:text-left  gap-5 text-white md:items-start ">
              <Image src={sveIcon1} alt="" className=" w-[70px]" />
              <div>
                <h2 className=" text-[24px] sm:text-[30px] md:text-xl font-bold mb-3  ">
                  Education Services
                </h2>
                <p className=" sm:text-[18px]">
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <div className=" flex gap-x-3 items-center justify-center md:justify-start mt-4">
                  <p>Read More </p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" bg-secoundary p-7   cursor-pointer ">
            <div className=" flex md:flex-row flex-col items-center justify-center text-center md:text-left  gap-5 text-white md:items-start ">
              <Image src={sveIcon2} alt="" className=" w-[70px]" />
              <div>
                <h2 className=" text-[24px] sm:text-[30px] md:text-xl font-bold mb-3 ">
                  International Hubs
                </h2>
                <p className="sm:text-[18px] ">
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <div className=" flex gap-x-3 items-center justify-center md:justify-start mt-4">
                  <p>Read More </p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" md:bg-primary/75 bg-primary p-7 hover:bg-secoundary transition cursor-pointer">
            <div className=" flex md:flex-row flex-col items-center justify-center text-center md:text-left  gap-5 text-white md:items-start ">
              <Image src={sveIcon3} alt="" className=" w-[70px]" />
              <div>
                <h2 className=" text-[24px] sm:text-[30px] md:text-xl font-bold mb-3 ">
                  {`Bachelor’s and Master’s`}
                </h2>
                <p className=" sm:text-[18px]">
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <div className=" flex gap-x-3 items-center justify-center md:justify-start mt-4">
                  <p>Read More </p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

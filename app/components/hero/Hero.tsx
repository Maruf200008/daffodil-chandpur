import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import sveIcon1 from "../../images/sve-icon4.png";
import sveIcon2 from "../../images/sve-icon5.png";
import sveIcon3 from "../../images/sve-icon6.png";
import HeroCarasol from "./HeroCarasol";

const Hero = () => {
  return (
    <div className=" w-full h-[900px] overflow-hidden bg-slate-300 relative ">
      <HeroCarasol />
      <div className=" absolute bottom-0 z-40 w-full   ">
        <div className=" px-32 mx-auto flex items-center justify-center gap-x-10 ">
          <div className=" bg-primary/75 p-7 hover:bg-secoundary transition   cursor-pointer ">
            <div className=" flex gap-x-5 text-white items-start ">
              <Image src={sveIcon1} alt="" className=" w-[70px]" />
              <div>
                <h2 className=" text-xl font-bold mb-3 ">Education Services</h2>
                <p className=" ">
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <div className=" flex gap-x-3 items-center mt-4">
                  <p>Read More </p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" bg-secoundary p-7   cursor-pointer ">
            <div className=" flex gap-x-5 text-white items-start ">
              <Image
                src={sveIcon2}
                alt=""
                className=" w-[70px] h-full bg-cover"
              />
              <div>
                <h2 className=" text-xl font-bold mb-3 ">International Hubs</h2>
                <p className=" ">
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <div className=" flex gap-x-3 items-center mt-4">
                  <p>Read More </p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" bg-primary/75 p-7 hover:bg-secoundary transition   cursor-pointer ">
            <div className=" flex gap-x-5 text-white items-start ">
              <Image src={sveIcon3} alt="" className=" w-[70px]" />
              <div>
                <h2 className=" text-xl font-bold mb-3 ">
                  Bachelor’s and Master’s
                </h2>
                <p className=" ">
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <div className=" flex gap-x-3 items-center mt-4">
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

"use client";

import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
const setToggle = () => {
  console.log("Click");
};

const HeroCarasol = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="">
              <Image src={hero1} alt="" className=" relative" />
              <div className=" px-32 top-[150px] absolute">
                <div className=" space-y-9">
                  <div className=" flex items-center gap-x-5 ">
                    <p className=" uppercase     text-white font-semibold text-xl ">
                      welcome To Daffodil University
                    </p>
                    <div className=" w-[70px] h-[3px] bg-secoundary"></div>
                  </div>
                  <h2 className=" text-[60px] font-bold text-white leading-[60px]">
                    Education is the best <br /> key success in life
                  </h2>
                  <p className=" text-white">
                    Donec vitae libero non enim placerat eleifend aliquam erat
                    volutpat. Curabitur diam ex, <br /> dapibus purus sapien,
                    cursus sed nisl tristique, commodo gravida lectus non.
                  </p>
                  <div className=" flex gap-x-6 -ml-5">
                    <Link
                      href="#_"
                      className=" relative px-7 py-3 overflow-hidden font-medium text-white bg-secoundary  border-secoundary hover:border-secoundary hover:border border  shadow-inner group  flex items-center ml-6 rounded-md "
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center gap-x-4">
                        Discover More <BsArrowRight />
                      </span>
                    </Link>
                    <Link
                      href="#_"
                      className=" relative px-7 py-3 overflow-hidden font-medium text-white  bg-transparent border border-white   hover:border-white hover:border  shadow-inner group  flex items-center ml-6 rounded-md "
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center gap-x-4">
                        Discover More <BsArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={hero2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={hero3} alt="" className=" h-full object-cover" />
          </div>
        </SwiperSlide>
        <div className=" top-[50%] left-0  button-next-slide cursor-pointer absolute z-20  ">
          <IoIosArrowBack className="  dark:bg-white rounded-full h-[45px] w-[45px] p-2 text-gray-900 hover:bg-secoundary hover:text-white transition ml-5" />
        </div>
        <div className=" top-[50%] md:right-1 right-0 button-prev-slide cursor-pointer absolute z-20 ">
          <IoIosArrowForward className="  dark:bg-white rounded-full h-[45px] w-[45px] p-2 text-gray-900 hover:bg-secoundary hover:text-white transition mr-5" />
        </div>
      </Swiper>
    </>
  );
};

export default HeroCarasol;

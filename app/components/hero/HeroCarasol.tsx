"use client";

import { BsArrowRight } from "react-icons/bs";
import hero1 from "../../images/hero1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

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
              <Image
                src={hero1}
                alt=""
                className=" relative h-[650px] md:h-[800px] xl:h-full object-cover "
              />
              <div className=" px-5 sm:px-14 xl:px-32 top-[100px] lg:w-[70%] md:top-[170px] lg:top-[100px] absolute">
                <div className="space-y-9">
                  <div className=" flex items-center gap-x-5 ">
                    <p className=" uppercase  text-white font-semibold text-[15px] sm:text-[17px] md:text-xl  ">
                      welcome To Daffodil University
                    </p>
                    <div className=" w-[70px] h-[3px] bg-secoundary hidden xl:block"></div>
                  </div>
                  <h2 className=" text-[40px] leading-[50px] sm:text-[50px]  md:text-[80px] font-bold text-white md:leading-[80px] sm:leading-[60px] lg:text-[60px]">
                    Education is the best key success in life
                  </h2>
                  <p className=" text-white  sm:text-[18px] md:text-[20px] font-medium lg:text-[18px]">
                    Donec vitae libero non enim placerat eleifend aliquam erat
                    volutpat. Curabitur diam ex, dapibus purus sapien, cursus
                    sed nisl tristique, commodo gravida lectus non.
                  </p>
                  <div className=" flex flex-col gap-y-4 sm:flex-row gap-x-3 -ml-5 ">
                    <Link
                      href="#_"
                      passHref
                      className=" relative px-5 py-4  overflow-hidden font-medium text-white bg-secoundary  border-secoundary hover:border-secoundary hover:border border  shadow-inner group  flex items-center ml-6 rounded-md justify-center md:justify-start "
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875]  ease"></span>
                      <span className="absolute bottom-0 right-0  h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center text-[15px]   md:text gap-x-2">
                        Discover More <BsArrowRight />
                      </span>
                    </Link>
                    <Link
                      href="#_"
                      passHref
                      className=" relative px-5 py-4  overflow-hidden font-medium text-white bg-transparent border-white   border  shadow-inner group  flex items-center ml-6 rounded-md justify-center md:justify-start "
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center text-[15px] md:text gap-x-2">
                        Contact Us <BsArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarasol;

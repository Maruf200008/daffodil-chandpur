"use client";
// Import Swiper React components
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import couImg from "../../images/cou-icon.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import CoursesData from "../../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const Courses = () => {
  return (
    <div className=" py-20 md:py-28 sm:px-14  xl:px-32 px-5 lg:px-[50px] relative ">
      <div className=" flex items-center text-secoundary gap-x-3  mb-10 justify-center md:justify-start">
        <LuGraduationCap size={30} />
        <p className="  font-semibold sm:text-[20px]  md:text-xl text-center">
          Our Courses
        </p>
      </div>
      <h2 className=" text-[50px] leading-[55px] md:text-[50px] font-bold text-gray-800 mb-14 text-center md:text-left mt-[-20px]">
        Graduate Programs
      </h2>
      <div className=" hidden  absolute z-40 top-[145px] right-[150px] xl:flex items-center gap-x-3">
        <div className=" button-next-slide cursor-pointer bg-secoundary py-5 rounded-md px-4 flex items-center justify-center text-white hover:bg-primary transition  ">
          <IoIosArrowForward size={30} />
        </div>
        <div className="  button-prev-slide cursor-pointer bg-secoundary py-5 rounded-md px-4 flex items-center justify-center text-white hover:bg-primary transition ">
          <IoIosArrowBack size={30} />
        </div>
      </div>
      <Swiper
        // Responsive breakpoints
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {CoursesData.map((data) => (
          <SwiperSlide key={data?.id}>
            <div className="    bg-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 group   duration-150 overflow-hidden ">
              <div className=" xl:h-[220px] overflow-hidden  bg-slate-500 relative">
                <Image
                  src={data?.img}
                  alt=""
                  className=" group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer h-full"
                />
              </div>
              <div className=" absolute flex items-center gap-x-3 right-5 bg-secoundary text-white py-2 px-3 rounded-md mt-[-20px]   ">
                <LuGraduationCap size={22} />
                <p>{data?.subj}</p>
              </div>

              <div className=" p-7 space-y-5">
                <Link
                  href={`/courses/${data.id}`}
                  className=" mt-5 text-[20px] sm:text-[35px] md:text-[45px] font-bold text-gray-800 hover:text-secoundary transition cursor-pointer lg:text-[30px]"
                >
                  {data?.title}
                </Link>
                <p className=" text-[14px] text-gray-600 sm:text-[17px] md:text-[22px] lg:text-[16px]">
                  {data?.desc1.split("").slice(0, 150)}
                </p>
                <div className=" flex justify-between items-center">
                  <div className=" flex items-center text-[14px] sm:text-[17px] gap-x-2 text-secoundary">
                    <Link href={`/courses/${data.id}`}>Read More </Link>
                    <BsArrowRight size={15} />
                  </div>
                  <Image
                    src={couImg}
                    alt=""
                    className=" group-hover:scale-125 transition ease-in-out duration-500"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courses;

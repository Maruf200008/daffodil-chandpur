"use client";
// Import Swiper React components
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import couImg from "../../images/cou-icon.png";

import CoursesData from "../../utils/data";

import { LuGraduationCap } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

const Courses = () => {
  return (
    <div className=" py-20 md:py-28 sm:px-14  xl:px-32 px-5 lg:px-[50px] relative grid md:grid-cols-2 xl:grid-cols-3 gap-7 ">
      {CoursesData.map((data) => (
        <div
          key={data.id}
          className=" bg-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 group   duration-150 overflow-hidden relative "
        >
          <div className=" xl:h-[220px] overflow-hidden  bg-slate-500 ">
            <Image
              src={data?.img}
              alt=""
              className=" group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer h-full"
            />
          </div>
          <div className=" right-4 absolute flex items-center gap-x-3   bg-secoundary text-white py-2 px-3 rounded-md mt-[-20px]   ">
            <LuGraduationCap size={22} />
            <p>{data?.subj}</p>
          </div>

          <div className=" p-7 space-y-5">
            <Link
              href={`/courses/${data.id}`}
              className=" mt-5 text-[20px] sm:text-[35px] md:text-[25px] font-bold text-gray-800 hover:text-secoundary transition cursor-pointer lg:text-[30px] xl:text-[25px]"
            >
              {data?.title}
            </Link>
            <p className=" text-[14px] text-gray-600 sm:text-[17px] md:text-[18px] lg:text-[16px]">
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
      ))}
    </div>
  );
};

export default Courses;

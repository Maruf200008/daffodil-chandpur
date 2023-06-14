"use client";
// Import Swiper React components
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import couImg from "../../images/cou-icon.png";
import couress1 from "../../images/couress-img-1.jpg";
import couress2 from "../../images/couress-img-2.jpg";
import couress3 from "../../images/couress-img-3.jpg";
import couress4 from "../../images/couress-img-4.jpg";
import couress5 from "../../images/couress-img-5.jpg";
import couress6 from "../../images/couress-img-6.jpg";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const Courses = () => {
  const options = [
    {
      img: couress1,
      subj: "Biochemistry",
      title: "Biochemistry",
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      img: couress2,
      subj: "Economics",
      title: "Major in Economics",
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      img: couress3,
      subj: "Media",
      title: "Business Media",
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      img: couress4,
      subj: "Public",
      title: "Public Administration",
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      img: couress5,
      subj: "Sciences",
      title: "Biotechnology",
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      img: couress6,
      subj: "Finance",
      title: "Corporate Finance",
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
  ];
  return (
    <div className=" py-10 md:py-28 md:px-32 px-10 relative">
      <div className=" flex items-center text-secoundary gap-x-3 mb-10 justify-center md:justify-start">
        <LuGraduationCap size={30} />
        <p className="  font-semibold  md:text-xl text-center">Our Courses</p>
      </div>
      <h2 className=" text-4xl md:text-[50px] font-bold text-gray-800 mb-14">
        Graduate Programs
      </h2>
      <div className=" hidden  absolute z-40 top-[145px] right-[150px] md:flex items-center gap-x-3">
        <div className=" button-next-slide cursor-pointer bg-secoundary py-5 rounded-md px-4 flex items-center justify-center text-white hover:bg-primary transition  ">
          <IoIosArrowForward size={30} />
        </div>
        <div className="  button-prev-slide cursor-pointer bg-secoundary py-5 rounded-md px-4 flex items-center justify-center text-white hover:bg-primary transition">
          <IoIosArrowBack size={30} />
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        // breakpoints={
        //     0: {
        //         slidesPerView: 1,
        //     },

        // }
        pagination={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {options.map((opt, index) => (
          <SwiperSlide key={index}>
            <div className=" w-[400px]  h-[420px] bg-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 group   duration-150 overflow-hidden relative">
              <div className="h-[220px] overflow-hidden ">
                <Image
                  src={opt?.img}
                  alt=""
                  className=" w-full group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer"
                />
              </div>
              <div className=" absolute flex items-center gap-x-3 right-5 bg-secoundary text-white py-2 px-3 rounded-md top-[48%] ">
                <LuGraduationCap size={22} />
                <p>{opt?.subj}</p>
              </div>

              <div className=" p-7 space-y-5">
                <h1 className=" text-2xl font-semibold text-gray-800 hover:text-secoundary transition cursor-pointer">
                  {opt?.title}
                </h1>
                <p className=" text-[14px] text-gray-600">{opt?.desc}</p>
                <div className=" flex justify-between items-center">
                  <div className=" flex items-center text-[14px] gap-x-2 text-secoundary">
                    <Link href="">Read More </Link>
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

"use client";
// Import Swiper React components
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import couImg from "../../images/cou-icon.png";
import couress1 from "../../images/couress-img-1.jpg";
import couress2 from "../../images/couress-img-2.jpg";
import couress3 from "../../images/couress-img-3.jpg";
import couress4 from "../../images/couress-img-4.jpg";
import couress5 from "../../images/couress-img-5.jpg";
import couress6 from "../../images/couress-img-6.jpg";

import { LuGraduationCap } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

const Courses = () => {
  interface Courses {
    img: string | StaticImageData;
    subj: string;
    title: string;
    desc: string;
  }
  const options: Courses[] = [
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
    <div className=" py-20 md:py-28 sm:px-14  xl:px-32 px-5 lg:px-[50px] relative grid md:grid-cols-2 xl:grid-cols-3 gap-7 ">
      {options.map((opt, index) => (
        <div
          key={index}
          className=" bg-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 group   duration-150 overflow-hidden relative "
        >
          <div className=" xl:h-[220px] overflow-hidden  bg-slate-500 ">
            <Image
              src={opt?.img}
              alt=""
              className=" group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer h-full"
            />
          </div>
          <div className=" right-4 absolute flex items-center gap-x-3   bg-secoundary text-white py-2 px-3 rounded-md mt-[-20px]   ">
            <LuGraduationCap size={22} />
            <p>{opt?.subj}</p>
          </div>

          <div className=" p-7 space-y-5">
            <h1 className=" mt-5 text-[20px] sm:text-[35px] md:text-[25px] font-bold text-gray-800 hover:text-secoundary transition cursor-pointer lg:text-[30px] xl:text-[25px]">
              {opt?.title}
            </h1>
            <p className=" text-[14px] text-gray-600 sm:text-[17px] md:text-[18px] lg:text-[16px]">
              {opt?.desc}
            </p>
            <div className=" flex justify-between items-center">
              <div className=" flex items-center text-[14px] sm:text-[17px] gap-x-2 text-secoundary">
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
      ))}
    </div>
  );
};

export default Courses;

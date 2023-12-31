"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import aboutImg1 from "../../images/about_img_02.png";
import aiImagee from "../../images/an-img-02.png";

const About = () => {
  return (
    <div className=" bg-slate-100 lg:px-[50px] py-24 sm:px-16 md:py-28 xl:px-32 px-5 relative mt-[60px] xl:mt-0 lg:mt-[200px]">
      <div className=" grid lg:grid-cols-2 gap-y-10 gap-x-20 lg:gap-x-10">
        <div className="flex items-start">
          <div>
            <Image src={aboutImg1} alt="" className="" />
          </div>
          <div className=" hidden  ml-[-290px] w-[290px] bg-primary rounded-lg  relative h-[130px] 2xl:flex items-center flex-col justify-center text-white overflow-hidden">
            <div className="z-40 absolute h-[120px] w-[290px] top-0 bg-secoundary"></div>
            <div className="z-40 text-center">
              <h2 className="text-4xl font-bold">25 +</h2>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="space-y-7">
          <div className="flex items-center justify-center md:justify-start text-secoundary gap-x-3">
            <LuGraduationCap size={30} />
            <p className="font-semibold text-[18px] sm:text-[22px] md:text-xl">
              About Our University
            </p>
          </div>

          <h2 className="text-[40px] sm:text-[50px] text-center md:text-left leading-[50px] font-bold text-gray-900 lg:text-[40px]">
            A Few Words About the University
          </h2>

          <p className="text-lg text-primary font-medium sm:text-[20px]">
            Our community is being called to reimagine the future. As the only
            university where a renowned design school comes together with
            premier colleges, we are making learning more relevant and
            transformational.
          </p>
          <p className="text-gray-500 font-medium sm:text-[18px]">
            We are proud to offer top ranige in employment services such and
            asser payroll and benefits administrato managemen and asistance with
            global business range ployment employer readings from religious
            texts or literature are also commonly inc compliance.
          </p>
          <div className="grid md:grid-cols-2 md:items-center gap-y-5 mt-5 md:mt-0 2xl:gap-5 ">
            <div className=" flex gap-x-3   ">
              <div className="bg-secoundary h-[40px] w-[60px] sm:h-[60px] md:h-[50px] md:w-[100px] lg:w-[130px] rounded-full flex items-center justify-center text-xl text-white font-bold">
                01
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 sm:text-[30px] lg:text-[25px]">
                  Doctoral Degrees
                </h3>
                <p className="text-gray-500 text-[14px] sm:text-[20px] lg:text-[16px]">
                  consectetur adipiscing elit sed do eiusmod tem incid idunt.
                </p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="bg-secoundary h-[40px] w-[60px] sm:h-[60px] md:h-[50px] md:w-[100px] lg:w-[130px] rounded-full flex items-center justify-center text-xl text-white font-bold">
                02
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 sm:text-[30px] lg:text-[25px]">
                  Global Students
                </h3>
                <p className="text-gray-500 text-[14px] sm:text-[20px] lg:text-[16px]">
                  consectetur adipiscing elit sed do eiusmod tem incid idunt.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="#_"
            passHref
            className="relative w-[170px] h-[60px] py-2 px-5 lg:z-40 overflow-hidden font-medium text-white bg-primary hover:bg-primary   shadow-inner group  flex items-center rounded-md"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-primary group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-primary group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-secoundary group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-secoundary group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-secoundary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center text-[15px] md:text gap-x-2">
              Read More <BsArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-0  hidden md:block">
        <Image src={aiImagee} alt="" />
      </div>
    </div>
  );
};

export default About;

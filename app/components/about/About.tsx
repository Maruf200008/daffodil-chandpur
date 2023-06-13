"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import aboutImg1 from "../../images/about_img_02.png";
import aiImagee from "../../images/an-img-02.png";

const About = () => {
  return (
    <div className=" bg-slate-200 md:py-28 px-32 relative">
      <div className=" grid grid-cols-2 gap-x-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -75 }}
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="flex items-start"
        >
          <div>
            <Image src={aboutImg1} alt="" />
          </div>
          <div className=" ml-[-290px]  bg-primary rounded-lg w-[280px] relative h-[130px] flex items-center flex-col justify-center text-white overflow-hidden">
            <div className=" z-10 absolute w-full h-[120px] top-0 bg-secoundary"></div>
            <div className=" z-40 text-center">
              <h2 className=" text-4xl font-bold">25 +</h2>
              <p className=" text-lg">Years of Experience</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 75 }}
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className=" space-y-5"
        >
          <div className=" flex items-center text-secoundary gap-x-3">
            <LuGraduationCap size={30} />
            <p className=" text-xl font-semibold">About Our University</p>
          </div>

          <h2 className=" text-[50px] font-bold text-gray-800">
            A Few Words About the University
          </h2>

          <p className=" text-lg text-primary">
            Our community is being called to reimagine the future. As the only
            university where a renowned design school comes together with
            premier colleges, we are making learning more relevant and
            transformational.
          </p>
          <p className=" text-gray-500">
            We are proud to offer top ranige in employment services such and
            asser payroll and benefits administrato managemen and asistance with
            global business range ployment employer readings from religious
            texts or literature are also commonly inc compliance.
          </p>
          <div className=" flex items-center gap-x-3">
            <div className=" flex gap-x-3">
              <div className=" bg-secoundary h-[60px] w-[100px] rounded-full flex items-center justify-center text-xl text-white font-bold ">
                01
              </div>
              <div className=" space-y-3">
                <h3 className=" text-xl font-bold text-gray-800">
                  Doctoral Degrees
                </h3>
                <p className=" text-gray-500 text-[14px] ">
                  consectetur adipiscing elit sed do eiusmod tem incid idunt.
                </p>
              </div>
            </div>
            <div className=" flex gap-x-3">
              <div className=" bg-secoundary h-[60px] w-[100px] rounded-full flex items-center justify-center text-xl text-white font-bold ">
                02
              </div>
              <div className=" space-y-3">
                <h3 className=" text-xl font-bold text-gray-800">
                  Global Students
                </h3>
                <p className=" text-gray-500 text-[14px] ">
                  consectetur adipiscing elit sed do eiusmod tem incid idunt.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="#_"
            className=" relative w-[170px] h-[60px] py-2 px-5  overflow-hidden font-medium text-white bg-primary    hover:bg-primary   shadow-inner group  flex items-center  rounded-md "
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
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.5,
          delay: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: -10 },
        }}
        className="absolute bottom-0 right-0 w-[450px]"
      >
        <Image src={aiImagee} alt="" />
      </motion.div>
    </div>
  );
};

export default About;

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo.png";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const navMenuItesm = ["Home", "About Us", "Courses", "Blog", "Contact"];

const NavOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="relative  hidden lg:block ">
        <nav className="bg-white lg:px-[110px] lg:mt-[-20px]  z-20  left-0 border-b border-gray-200 ">
          <div className=" flex flex-wrap items-center justify-between mx-auto  h-[70px]">
            <Link href="" passHref className="flex items-center">
              <Image src={logo} className=" w-[150px]" alt=" Logo" />
            </Link>

            <div
              className="items-center justify-between hidden  md:flex  md:order-1   h-full"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border   border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   ">
                <Link
                  href="#"
                  className=" text-slate-700 hover:text-secoundary transition"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className=" text-slate-700 hover:text-secoundary transition"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className=" text-slate-700 hover:text-secoundary transition"
                >
                  Courses
                </Link>
                <Link
                  href="#"
                  className=" text-slate-700 hover:text-secoundary transition"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className=" text-slate-700 hover:text-secoundary transition"
                >
                  Contact
                </Link>
                <AiOutlineSearch
                  onClick={() => setToggle(!toggle)}
                  size={25}
                  className=" cursor-pointer text-slate-700"
                />
              </ul>
              <Link
                href="#_"
                passHref
                className="relative px-7 py-3 overflow-hidden font-medium text-white bg-secoundary   shadow-inner group lg:h-full flex items-center ml-6 "
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease uppercase">
                  admission open
                </span>
              </Link>
            </div>
          </div>
        </nav>
        <div className=" relative ">
          <div
            className={` fixed  transition-all ease-in  py-5 stiky right-[-350px]  bg-[#00081b] space-y-10   z-50 h-[100vh] px-7 text-white top-0  duration-500 ${
              toggle ? " right-[0]" : "right-[-350px]  overflow-y-scroll"
            }`}
          >
            <RxCross2
              className=" text-white cursor-pointer"
              size={30}
              onClick={() => setToggle(!toggle)}
            />
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block px-2 py-3 text-white text-sm  border border-gray-800 bg-gray-50 focus:outline-none bg-transparent "
                  placeholder="Search.."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-0 bottom-0 h-full font-medium  text-sm px-6 py-2 bg-secoundary"
                >
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>

            <ul className=" flex flex-col gap-y-2">
              <Link
                href=""
                className=" text-start text-lg border-b  border-slate-700 pb-3 pr-[140px] hover:text-secoundary transition"
              >
                Home
              </Link>
              <Link
                href=""
                className=" text-start text-lg border-b  border-slate-700 pb-3 pr-[140px] hover:text-secoundary transition"
              >
                About Us
              </Link>
              <Link
                href=""
                className=" text-start text-lg border-b  border-slate-700 pb-3 pr-[140px] hover:text-secoundary transition"
              >
                Courses
              </Link>
              <Link
                href=""
                className=" text-start text-lg border-b  border-slate-700 pb-3 pr-[140px] hover:text-secoundary transition"
              >
                Blog
              </Link>
              <Link
                href=""
                className=" text-start text-lg border-b  border-slate-700 pb-3 pr-[140px] hover:text-secoundary transition"
              >
                Contact
              </Link>
            </ul>
            <div className=" mt-10 space-y-4">
              <div className=" space-y-2">
                <p className=" text-secoundary">Email Now</p>
                <h2 className=" text-lg font-semibold border-b pb-2 border-slate-700 cursor-pointer hover:text-secoundary transition">
                  {" "}
                  info@example.com{" "}
                </h2>
              </div>
              <div className=" space-y-2">
                <p className=" text-secoundary">Call Now !</p>
                <h2 className=" text-lg font-semibold border-b pb-2 border-slate-700 cursor-pointer hover:text-secoundary transition">
                  {" "}
                  +91 7052 101 786{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile responsive */}
      <div className=" flex justify-between items-center relative   z-30 p-3 sm:px-14 sm:py-5  lg:hidden bg-white">
        <div className=" ">
          <Image src={logo} alt="" className="w-[150px]" />
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="menu  lg:hidden  top-1 "
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className=" border-2 p-2 border-gray-700">
              {!isOpen ? <FaBars size={20} /> : <RxCross2 size={20} />}
            </div>
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            ></motion.div>
          </motion.button>
          <motion.ul
            className=" absolute bg-white left-10 w-[250px] sm:w-[420px]    p-4  space-y-6 shadow-md"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {navMenuItesm.map((item, index) => (
              <motion.li
                key={index}
                className=" uppercase text-[16px] text-gray-600 font-medium border-b pb-2 hover:text-secoundary transition"
                variants={itemVariants}
              >
                {item}{" "}
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default NavOption;

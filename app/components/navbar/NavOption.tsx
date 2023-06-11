"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo.png";

const NavOption = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="relative w-full hidden md:block">
        <nav className="bg-white  px-28  w-full z-20  left-0 border-b border-gray-200 ">
          <div className=" flex flex-wrap items-center justify-between mx-auto h-[70px]">
            <Link href="" className="flex items-center">
              <Image src={logo} className=" w-[150px]" alt=" Logo" />
            </Link>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1   h-full"
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
                className="relative px-7 py-3 overflow-hidden font-medium text-white bg-secoundary   shadow-inner group h-[71px] flex items-center ml-6 "
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
            className={`w-[280px] fixed  transition-all ease-in  py-5 stiky right-[-350px]  bg-[#00081b] space-y-10   z-50 h-[100vh] px-7 text-white top-0  duration-500 ${
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
                  className="block w-full px-2 py-3 text-white text-sm  border border-gray-800 bg-gray-50 focus:outline-none bg-transparent "
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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

      <div className="bg-slate-200  p-4 relative md:hidden">
        <div className=" flex items-center justify-between ">
          <Image src={logo} alt="logo" className=" w-[150px]" />
          <div>
            {!toggle ? (
              <RiMenu3Fill
                size={30}
                className=" text-gray-600 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <RxCross2
                size={30}
                className=" text-gray-600 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
        </div>
        <div>
          <ul
            className={`w-[380px] h absolute -z-20 flex-col transition-all ease-in  py-5 stiky bg-white shadow-lg shadow-gray-200 gap-y-5 h-[300px] px-7 text-gray-800 top-0 flex ml-8  duration-500 ${
              toggle ? " top-[71px]" : "top-[-350px]  overflow-y-scroll"
            }`}
          >
            <Link
              href=""
              className=" border-b pb-3 font-bold hover:text-secoundary transition uppercase"
            >
              Home
            </Link>
            <Link
              href=""
              className=" border-b pb-3 font-bold hover:text-secoundary transition uppercase"
            >
              About Us
            </Link>
            <Link
              href=""
              className=" border-b pb-3 font-bold hover:text-secoundary transition uppercase"
            >
              Courses
            </Link>
            <Link
              href=""
              className=" border-b pb-3 font-bold hover:text-secoundary transition uppercase"
            >
              Blog
            </Link>
            <Link
              href=""
              className=" border-b pb-3 font-bold hover:text-secoundary transition uppercase"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavOption;

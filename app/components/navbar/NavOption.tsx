"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo.png";

const NavOption = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="  relative">
      <nav className="bg-white  px-28 fixed w-full z-20  left-0 border-b border-gray-200 ">
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
              className="relative px-7 py-3 overflow-hidden font-medium text-white bg-secoundary  border border-gray-100 shadow-inner group h-[71px] flex items-center ml-6 "
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-primary group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-primary group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Button Text
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`w-[280px] py-5 relative right-[-550px] bg-[#00081b] space-y-10 -top-[80px] z-20 h-[100vh] px-7 text-white transition-all duration-500 ${
          toggle ? " right-0" : "right-[-550px]"
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
  );
};

export default NavOption;

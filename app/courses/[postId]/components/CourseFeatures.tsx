import Link from "next/link";
import { BiBook, BiHomeAlt } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

type Data = {
  courceFee: string;
  decressCourceFee: string;
  instructor: string;
  lectures: number;
  duration: string;
  enrolled: string;
  language: string;
  discount: string;
};
const CourseFeatures = ({ data }: { data: Data }) => {
  return (
    <div className="  lg:px-5 overscroll-contain    ">
      <div className="rounded-md overflow-hidden  shadow-xl relative  ">
        <div className="     ">
          <div className=" bg-primary p-3">
            <h1 className=" text-center text-[20px] text-white  font-semibold">
              Course Features
            </h1>
          </div>
          <div className=" px-5 border py-5 space-y-5 ">
            <div>
              <div className=" flex items-center justify-between gap-3">
                <div className=" flex items-center gap-2">
                  <h2 className=" text-[25px] text-secoundary font-semibold">
                    {data?.courceFee}
                  </h2>
                  <p className=" line-through text-[16px] font-semibold ">
                    {data?.decressCourceFee}
                  </p>
                </div>
                <div className=" bg-[#ff73503d] px-5 py-2 rounded-md text-secoundary font-semibold">
                  <h2>{data?.discount}</h2>
                </div>
              </div>
              <div className=" mx-[-20px] h-[1px] bg-slate-300 mt-5" />
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" text-secoundary">
                  <BiHomeAlt size={25} />
                </div>
                <p className=" font-semibold">Instructor:</p>
                <p className=" text-[14px] text-gray-400">{data?.instructor}</p>
              </div>
              <div className=" mx-[-20px] h-[1px] bg-slate-300 mt-5" />
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" text-secoundary">
                  <BiBook size={25} />
                </div>
                <p className=" font-semibold">Lectures:</p>
                <p className=" text-[14px] text-gray-400">{data?.lectures}</p>
              </div>
              <div className=" mx-[-20px] h-[1px] bg-slate-300 mt-5" />
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" text-secoundary">
                  <BsClock size={25} />
                </div>
                <p className=" font-semibold">Duration:</p>
                <p className=" text-[14px] text-gray-400">{data?.duration}</p>
              </div>
              <div className=" mx-[-20px] h-[1px] bg-slate-300 mt-5" />
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" text-secoundary">
                  <FiUser size={25} />
                </div>
                <p className=" font-semibold">Enrolled:</p>
                <p className=" text-[14px] text-gray-400">{data?.enrolled}</p>
              </div>
              <div className=" mx-[-20px] h-[1px] bg-slate-300 mt-5" />
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" text-secoundary">
                  <MdLanguage size={25} />
                </div>
                <p className=" font-semibold">Language:</p>
                <p className=" text-[14px] text-gray-400">{data?.language}</p>
              </div>
              <div className=" mx-[-20px] h-[1px] bg-slate-300 mt-5" />
            </div>

            <Link
              href="/contact"
              passHref
              className=" relative px-5 py-4  overflow-hidden font-medium text-white bg-secoundary  border-secoundary hover:border-secoundary hover:border border  shadow-inner group  flex items-center ml-6 rounded-md justify-center  "
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875]  ease"></span>
              <span className="absolute bottom-0 right-0  h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center text-[15px]   md:text gap-x-2">
                Enroll <BsArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;

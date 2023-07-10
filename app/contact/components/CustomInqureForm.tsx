import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GoMail } from "react-icons/go";
const CustomInqureForm = () => {
  let rows: number = parseInt("10");
  return (
    <div className=" bg-[#6EC1E4]/25">
      <div className="lg:px-[50px] py-24 sm:px-16 md:py-28 xl:px-32 px-5 ">
        <h1 className=" text-center text-[30px]  sm:text-[45px] font-bold text-slate-800">
          Make Appointment
        </h1>
        <div className=" mt-10">
          <form className=" space-y-5">
            <div className=" flex flex-col md:flex-row items-center gap-5">
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:outline-none  block w-full pl-5 p-3.5  "
                  placeholder="Your Name"
                  required
                />
                <AiOutlineUser
                  size={35}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 top-1"
                />
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:outline-none  block w-full pl-5 p-3.5  "
                  placeholder="Email"
                  required
                />
                <GoMail
                  size={35}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 top-1"
                />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:outline-none  block w-full pl-5 p-3.5  "
                  placeholder="Phone No"
                  required
                />
                <FiPhoneOutgoing
                  size={35}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 top-1"
                />
              </div>
            </div>
            <div>
              <div className="relative w-full ">
                <textarea
                  name="message"
                  rows={rows}
                  className=" w-full rounded-md resize-none focus:outline-none p-4"
                  placeholder="Message..."
                ></textarea>
                <BiMessageRoundedEdit
                  size={35}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 top-1"
                />
              </div>
            </div>
            <div className=" flex items-start justify-center">
              <Link
                href="#_"
                passHref
                className=" relative px-5 py-4  overflow-hidden font-medium text-white bg-secoundary  border-secoundary hover:border-secoundary hover:border border  shadow-inner group  flex items-center ml-6 rounded-md justify-center md:justify-start "
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875]  ease"></span>
                <span className="absolute bottom-0 right-0  h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center text-[15px]   md:text gap-x-2">
                  Make An Request <BsArrowRight />
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomInqureForm;

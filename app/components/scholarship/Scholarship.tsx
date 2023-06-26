import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const Scholarship = () => {
  return (
    <div className="mb-20 bg-[url('https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/cta_bg02.png')] bg-cover bg-center   md:h-[270px] py-20 mt-12 md:mt-0">
      <div className=" py-5 md:py-14 md:px-32 px-5 sm:px-14 ">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-y-5">
          <div className=" text-white space-y-5 md:w-[900px] text-center md:text-left ">
            <h1 className="  md:text-left text-[40px]  sm:text-[50px] font-bold">
              Scholarship Programs
            </h1>
            <p className=" text-[18px] font-medium mb-10">
              At Estuidar University, we prepare you to launch your career by
              providing a supportive, creative, and professional environment
              from which to learn practical skills and build a network of
              industry contacts.
            </p>
          </div>
          <div>
            <Link
              href=""
              passHref
              className=" relative px-5 py-4  overflow-hidden font-medium text-white bg-secoundary  border-secoundary hover:border-secoundary hover:border border  shadow-inner group  flex items-center ml-6 rounded-md "
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 bg-[#125875] group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-[#125875] group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#125875] group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#125875] opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center text-[15px] md:text gap-x-2">
                Financial Aid <BsArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;

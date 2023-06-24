import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import aboutImg from "../../images/about_img.png";

const AdmissionAndAid = () => {
  return (
    <div className="py-10 px-28 mb-20">
      <div className=" grid grid-cols-2 gap-x-10 items-center">
        <div>
          <Image src={aboutImg} alt="aboutImg" />
        </div>
        <div className=" space-y-5">
          <h2 className=" text-[40px] font-bold text-gray-700">
            Admission & Aid
          </h2>
          <p className=" text-primary">
            Our community is being called to reimagine the future. As the only
            university where a renowned design school comes together with
            premier colleges, we are making learning more relevant and
            transformational.
          </p>
          <Link
            href=""
            className=" relative px-5 py-4  overflow-hidden font-medium text-white bg-secoundary  border-secoundary hover:border-secoundary hover:border border  shadow-inner group  flex items-center  rounded-md w-[25%] "
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
  );
};

export default AdmissionAndAid;
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import aboutImg from "../../images/about_img.png";

const AdmissionAndAid = () => {
  return (
    <div className="py-10 px-5 sm:px-14 xl:px-28 mb-20 lg:px-[50px]">
      <div className=" grid lg:grid-cols-2 gap-x-10 items-center justify-center ">
        <div className=" mx-auto 2xl:mx-0">
          <Image src={aboutImg} alt="aboutImg" />
        </div>
        <div className=" space-y-5 flex flex-col items-center lg:items-start lg:justify-start  justify-center ">
          <h2 className=" text-[40px] font-bold text-gray-700 mt-14 xl:mt-0 text-center md:text-left">
            Admission & Aid
          </h2>
          <p className=" text-primary text-[18px] font-medium text-center md:text-left">
            Our community is being called to reimagine the future. As the only
            university where a renowned design school comes together with
            premier colleges, we are making learning more relevant and
            transformational.
          </p>
          <Link
            href="#_"
            passHref
            className=" relative w-[170px] h-[60px] py-2 px-5 lg:z-40  overflow-hidden font-medium text-white bg-primary    hover:bg-primary   shadow-inner group  flex items-center  rounded-md justify-center "
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
    </div>
  );
};

export default AdmissionAndAid;

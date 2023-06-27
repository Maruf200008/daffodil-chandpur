import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const EventCard = ({ subject }) => {
  const { img, date, monthAndYear, title, description, writenDate, address } =
    subject || {};
  return (
    <div className="  xl:h-[450px]  bg-[#deeef5] hover:bg-primary duration-300 transition group  overflow-hidden relative">
      <div className=" overflow-hidden ">
        <Image
          src={img}
          alt=""
          className=" group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer"
        />
      </div>
      <div className=" absolute flex flex-col items-center gap-x-3 left-5 bg-secoundary text-white py-4 px-3  mt-[-70px] ">
        <h2 className=" text-3xl font-bold">{date}</h2>
        <p className=" text-[12px]">{monthAndYear}</p>
      </div>
      <div className=" p-7 space-y-5">
        <h1 className=" group-hover:text-white text-xl sm:text-[28px] md:text-2xl font-bold text-gray-800  transition cursor-pointer">
          {title}
        </h1>
        <p className=" text-[14px] sm:text-[17px] text-gray-600 group-hover:text-[#96bece]">
          {description}
        </p>
        <div className=" flex items-center gap-x-2 ">
          <div className=" flex items-center text-[12px] sm:text-[14px] gap-x-2 text-gray-500 group-hover:text-[#96bece]">
            <Link href="">{writenDate}</Link>
            <BsArrowRight size={15} />
          </div>
          <div>
            <p className=" text-[12px] md:text-[14px] text-secoundary group-hover:text-white">
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

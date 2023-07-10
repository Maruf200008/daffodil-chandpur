import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

type Blog = {
  img: string | StaticImageData;
  date: string;
  role: string;
  comment: string;
  title: string;
  desc: string;
};

const BloggCard = ({ data }: { data: Blog }) => {
  const { img, date, role, comment, title, desc } = data;
  return (
    <div className="   bg-white shadow-md md:shadow-lg  duration-300 transition group  overflow-hidden relative rounded-md">
      <div className="h-[290px] rounded-md overflow-hidden  ">
        <Image
          src={img}
          alt=""
          className=" h-full  group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer "
        />
      </div>
      <div className=" absolute flex items-center gap-x-3 md:left-5 bg-secoundary text-white p-3 top-[2%] left-1  md:top-[4%] rounded-md ">
        <MdOutlineDateRange />
        <p className=" text-[12px]">{date}</p>
      </div>
      <div className=" p-3 sm:p-7 md:p-7 space-y-5">
        <div className=" flex gap-x-5 2xl:gap-x-12 mt-6 md:mt-0  lg:gap-x-2 xl:gap-x-4">
          <div className=" flex gap-x-3 items-center">
            <BiUser className=" text-secoundary" size={22} />
            <p className=" text-[14px] text-gray-500">{role}</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <FaRegComments size={22} className="text-secoundary" />
            <p className=" text-[14px] text-gray-500">{comment}</p>
          </div>
        </div>
        <h1 className=" hover:text-secoundary text-[25px] leading-[30px] md:text-xl font-bold text-gray-800  transition cursor-pointer">
          {title}
        </h1>
        <p className=" text-[16px] text-gray-500  ">{desc}</p>
        <div className="">
          <div className=" flex items-center text-[12px] md:text-[14px] gap-x-2 text-secoundary font-semibold   hover:text-primary">
            <Link href="" className="text-[16px]">
              Read More
            </Link>
            <BsArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggCard;

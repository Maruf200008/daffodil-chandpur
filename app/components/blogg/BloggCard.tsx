import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const BloggCard = ({ data }) => {
  return (
    <div className="md:w-[430px]  h-[610px] bg-white shadow-lg  duration-300 transition group  overflow-hidden relative rounded-md">
      <div className="h-[290px] rounded-md overflow-hidden  ">
        <Image
          src={data?.img}
          alt=""
          className=" h-full w-full group-hover:scale-125 overflow-hidden object-cover transition duration-500 ease-in-out delay-150 cursor-pointer "
        />
      </div>
      <div className=" absolute flex items-center gap-x-3 left-5 bg-secoundary text-white p-3  top-[4%] rounded-md ">
        <MdOutlineDateRange />
        <p className=" text-[12px]">{data?.date}</p>
      </div>
      <div className=" p-7 space-y-5">
        <div className=" flex gap-x-12">
          <div className=" flex gap-x-3 items-center">
            <BiUser className=" text-secoundary" size={22} />
            <p className=" text-[14px] text-gray-500">{data?.role}</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <FaRegComments size={22} className="text-secoundary" />
            <p className=" text-[14px] text-gray-500">{data?.comment}</p>
          </div>
        </div>
        <h1 className=" hover:text-secoundary text-xl md:text-xl font-semibold text-gray-800  transition cursor-pointer">
          {data?.title}
        </h1>
        <p className=" text-[14px] text-gray-500 leading-8 ">{data?.desc}</p>
        <div className="">
          <div className=" flex items-center text-[12px] md:text-[14px] gap-x-2 text-secoundary font-semibold   hover:text-primary">
            <Link href="">Read More</Link>
            <BsArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggCard;

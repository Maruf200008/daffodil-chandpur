import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import img3 from "../../images/inner_b4.jpg";
import img4 from "../../images/inner_b5.jpg";
import img1 from "../../images/inner_b8.jpg";
import img2 from "../../images/inner_b9.jpg";
import AboutUs from "./AboutUs";
import Categories from "./Categories";
import FollowUs from "./FollowUs";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";
const News = () => {
  interface BlogType {
    img: string | StaticImageData;
    rolle: string;
    date: string;
    comment: string;
    title: string;
    desc: string;
  }
  const blogDate: BlogType[] = [
    {
      img: img1,
      rolle: "By admin",
      date: "March 8, 2023",
      comment: "No Comments",
      title: "Planting Seeds in the Hearts of Preschooler",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      img: img2,
      rolle: "By admin",
      date: "March 8, 2023",
      comment: "No Comments",
      title: "Why children need a Healthy Environment thousand",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      img: img3,
      rolle: "By admin",
      date: "March 8, 2023",
      comment: "No Comments",
      title: "Full-day kindergarten in Alberta kindergarten saves families.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      img: img4,
      rolle: "By admin",
      date: "March 8, 2023",
      comment: "No Comments",
      title: "Planting Seeds in the Hearts of Preschoolers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
  ];
  return (
    <div className="  lg:px-[50px] py-24 mt-[60px] xl:mt-0 lg:mt-[200px] sm:px-16 md:py-28 xl:px-32 px-5 ">
      <div className=" grid lg:grid-cols-3 lg:gap-10 xl:gap-16">
        <div className=" lg:col-span-2">
          <div className=" grid gap-10">
            {blogDate.map((data, index) => (
              <div className=" border" key={index}>
                <Image
                  src={data?.img}
                  alt="img"
                  className=" :mb-8 overflow-hidden"
                />
                <div className="p-5 space-y-10">
                  <div className=" flex items-center gap-4 md:gap-7  ">
                    <div className=" flex items-center gap-3">
                      <BiUser className=" text-secoundary" />
                      <p className=" text-slate-500 text-[12px] md:text-[14px]">
                        {data?.rolle}
                      </p>
                    </div>
                    <div className=" flex items-center gap-3">
                      <BiCalendar className=" text-secoundary" />
                      <p className=" text-slate-500 text-[12px] md:text-[14px]">
                        {data?.date}
                      </p>
                    </div>
                    <div className=" flex items-center gap-3">
                      <FaRegComments className=" text-secoundary" />
                      <p className=" text-slate-500 text-[12px] md:text-[14px]">
                        {data?.comment}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className=" text-[18px] md:text-[30px] font-bold hover:text-secoundary cursor-pointer transition">
                      {data?.title}
                    </h2>
                    <p className=" text-[14px] text-gray-500">{data?.desc}</p>
                    <Link
                      href="#_"
                      passHref
                      className="relative w-[170px] h-[60px] py-2 px-5 lg:z-40 overflow-hidden font-medium text-white bg-primary hover:bg-primary   shadow-inner group  flex items-center rounded-md"
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
            ))}
          </div>

          <div className=" flex gap-5 mt-12">
            <div className=" bg-secoundary transition shadow-lg w-[50px] h-[50px] rounded-full text-white font-bold  flex items-center justify-center cursor-pointer">
              1
            </div>
            <div className=" bg-slate-900 hover:bg-secoundary transition shadow-lg w-[50px] h-[50px] rounded-full text-white font-bold  flex items-center justify-center cursor-pointer">
              2
            </div>
          </div>
        </div>
        <div className=" space-y-10 ">
          <Search />
          <FollowUs />
          <RecentPosts />
          <AboutUs />
          <Categories />
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default News;

import { LuGraduationCap } from "react-icons/lu";
import innerB1 from "../../images/inner_b1.jpg";
import innerB2 from "../../images/inner_b2.jpg";
import innerB3 from "../../images/inner_b3.jpg";
import BloggCard from "./BloggCard";
const Blogg = () => {
  const blogsData = [
    {
      img: innerB1,
      date: "June-25, 2023",
      role: "By admin",
      comment: "No Comments",
      title: "Cras accumsan nulla nec lacus ultricies placerat.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    },
    {
      img: innerB2,
      date: "June-18, 2023",
      role: "By admin",
      comment: "No Comments",
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    },
    {
      img: innerB3,
      date: "June-05, 2023",
      role: "By admin",
      comment: "No Comments",
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    },
  ];
  return (
    <div className=" py-10 md:px-32 px-5   ">
      <div className=" flex items-center text-secoundary gap-x-3 mb-10 justify-center ">
        <LuGraduationCap size={30} />
        <p className="  font-semibold text-[20px]  md:text-xl text-center">
          Our Blogg
        </p>
      </div>
      <h2 className=" text-center text-[45px] mt-[-30px] md:mt-0 leading-[50px] md:text-[50px] font-bold text-gray-800 mb-14">
        Latest Blog & News
      </h2>

      <div className=" grid md:grid-cols-3 md:grid-rows-2 gap-10   mb-0 pb-0">
        {blogsData.map((data, index) => {
          return <BloggCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Blogg;

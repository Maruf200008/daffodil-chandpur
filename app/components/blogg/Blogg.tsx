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
    <div className=" py-10 md:py-28 md:px-32 px-10 relative">
      <div className=" flex items-center text-secoundary gap-x-3 mb-10 justify-center ">
        <LuGraduationCap size={30} />
        <p className="  font-semibold  md:text-xl text-center">Our Blogg</p>
      </div>
      <h2 className=" text-center text-4xl md:text-[50px] font-bold text-gray-800 mb-14">
        Latest Blog & News
      </h2>

      <div className=" grid md:grid-cols-3 md:grid-rows-2 gap-7">
        {blogsData.map((data, index) => {
          console.log(data);
          return <BloggCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Blogg;

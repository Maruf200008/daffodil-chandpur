import { LuGraduationCap } from "react-icons/lu";

import TestmonialSlider from "./TestmonialSlider";

const Testimonial = () => {
  return (
    <div className=" py-10 md:py-28 md:px-32 sm:px-14 px-5 relative">
      <div className=" flex items-center text-secoundary gap-x-3 mb-10 justify-center ">
        <LuGraduationCap size={30} />
        <p className="  font-semibold text-[20px]  md:text-xl text-center">
          {" "}
          Testimonial
        </p>
      </div>
      <h2 className=" text-center text-[40px] mt-[-30px] md:mt-0 md:text-[50px] font-bold text-gray-800 mb-14">
        What Our Clients Says
      </h2>
      <TestmonialSlider />
    </div>
  );
};

export default Testimonial;

import { LuGraduationCap } from "react-icons/lu";
import avator1 from "../../images/testi_avatar.png";
import avator2 from "../../images/testi_avatar_02.png";
import avator3 from "../../images/testi_avatar_03.png";
import TestmonialSlider from "./TestmonialSlider";

const Testimonial = () => {
  const sliderData = [
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator1,
      name: "Margie Dose",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator2,
      name: "Rock Dloder",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator3,
      name: "Roboto Eorure",
      roll: "Web Designer",
    },
  ];
  return (
    <div className=" py-10 md:py-28 md:px-32 px-10 relative">
      <div className=" flex items-center text-secoundary gap-x-3 mb-10 justify-center ">
        <LuGraduationCap size={30} />
        <p className="  font-semibold  md:text-xl text-center"> Testimonial</p>
      </div>
      <h2 className=" text-center text-4xl md:text-[50px] font-bold text-gray-800 mb-14">
        What Our Clients Says
      </h2>
      <TestmonialSlider />
    </div>
  );
};

export default Testimonial;

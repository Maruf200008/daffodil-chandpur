import { StaticImageData } from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import eventImg1 from "../../images/evn-img-1.jpg";
import eventImg2 from "../../images/evn-img-2.jpg";
import eventImg3 from "../../images/evn-img-3.jpg";
import eventImg4 from "../../images/evn-img-4.jpg";
import eventImg5 from "../../images/evn-img-5.jpg";
import eventImg6 from "../../images/evn-img-6.jpg";
import EventCard from "./EventCard";

const Events = () => {
  interface Subject {
    img: string | StaticImageData;
    date: string;
    title: string;
    monthAndYear: string;
    description: string;
    address: string;
    writenDate: string;
  }
  const subjects: Subject[] = [
    {
      img: eventImg1,
      date: "20",
      monthAndYear: "March, 2023",
      title: "Basic UI & UX Design for new development",
      description:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      address: "12/A, NewYork Sydney City",
      writenDate: "20 March, 2023",
    },
    {
      img: eventImg2,
      date: "22",
      monthAndYear: "March, 2023",
      title: "Digital Education Market Briefing: Minnesota 2023",
      description:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      address: "Portage Ave.Winnipeg, Canada",
      writenDate: "22 March, 2023",
    },
    {
      img: eventImg3,
      date: "24",
      monthAndYear: "March, 2023",
      title: "Learning Network Webinars for Music Teachers",
      description:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      address: "NewYork Sydney City",
      writenDate: "24 March, 2023",
    },
    {
      img: eventImg4,
      date: "26",
      monthAndYear: "March, 2023",
      title: "Next-Gen Higher Education Students Have Arrived?",
      description:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      address: "Portage Ave.Winnipeg, Canada",
      writenDate: "26 March, 2023",
    },
    {
      img: eventImg5,
      date: "28",
      monthAndYear: "March, 2023",
      title: "Digital Art & 3D Model – a future for film company",
      description:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      address: " NewYork Sydney City",
      writenDate: "28 March, 2023",
    },
    {
      img: eventImg6,
      date: "30",
      monthAndYear: "March, 2023",
      title: "Conscious Discipline Summer Institute",
      description:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      address: " NewYork Sydney City",
      writenDate: "03 March, 2022",
    },
  ];
  return (
    <div className=" py-10 md:py-28 xl:px-32 md:px-14 px-5 relative lg:px-[50px] ">
      <div className=" flex items-center text-secoundary gap-x-3 mb-10 justify-center  ">
        <LuGraduationCap size={30} />
        <p className="  font-semibold  md:text-xl text-[20px] sm:text-[25px] text-center ">
          {" "}
          Our Events
        </p>
      </div>
      <h2 className=" text-center  text-[40px] leading-[45px] sm:text-[55px] font-bold  mb-14 mt-[-30px]">
        Upcoming Events
      </h2>

      <div className=" grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 gap-7 ">
        {subjects.map((sub, index) => (
          <EventCard key={index} subject={sub} />
        ))}
      </div>
    </div>
  );
};

export default Events;

import CourseFeatures from "./CourseFeatures";
import CourseOverview from "./CourseOverview";

const Hero = ({ data }) => {
  return (
    <div className="py-10 mt-20 px-5 sm:px-14 xl:px-28 mb-20 lg:px-[50px]">
      <div className=" grid lg:grid-cols-3 gap-10">
        <div className=" lg:col-span-2">
          <CourseOverview data={data} />
        </div>
        <div className="">
          <CourseFeatures data={data} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

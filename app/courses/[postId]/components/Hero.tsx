import ScrollButton from "@/app/utils/ScrollButton";
import { StaticImageData } from "next/image";
import CourseFeatures from "./CourseFeatures";
import CourseOverview from "./CourseOverview";

interface CourceData {
  img: string | StaticImageData;

  decressCourceFee: string;
  instructor: string;
  lectures: number;
  duration: string;
  enrolled: string;
  language: string;
  discount: string;
  teacherImg: string | StaticImageData;
  name: string;
  roll: string;
  degree: string;
  subj: string;
  courceFee: string;
  courceTitle4: string;
  desc5: string;
  accordionTitle1: string;
  accordionDec1: string;
  accordionTitle2: string;
  accordionDec2: string;
  accordionTitle3: string;
  accordionDec3: string;
  desc1: string;
  desc2: string;
  courceTitle2: string;
  desc3: string;
  desc4: string;
  tickTitle1: string;
  tickTitle2: string;
  tickTitle3: string;
  tickTitle4: string;
  courceTitle3: string;
  tableTitle1: string;
  tableTitle2: string;
  tableTitle3: string;
  tableData1: string;
  tableData2: string;
  tableData3: string;
  tableData4: string;
  tableData5: string;
  tableData6: string;
}
const Hero = ({ data }: { data: CourceData }) => {
  return (
    <div className="py-10 mt-20 px-5 sm:px-14 xl:px-28 mb-20 lg:px-[50px]">
      <div className=" lg:grid lg:grid-cols-3 lg:gap-10">
        <div className=" lg:col-span-2">
          <CourseOverview data={data} />
          <ScrollButton />
        </div>
        <div className="">
          <CourseFeatures data={data} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

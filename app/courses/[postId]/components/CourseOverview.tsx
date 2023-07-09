import Image from "next/image";
import AccordionMenu from "./AccordionMenu";
import StudyOptions from "./StudyOptions";
import SubjectDetails from "./SubjectDetails";
import WhatYouWillLearn from "./WhatYouWillLearn";

const CourseOverview = ({
  data,
}: {
  data?: {
    img: string | StaticImageData;
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
  };
}) => {
  return (
    <div>
      <div className=" space-y-10">
        <Image src={data?.img} alt="courceImg" />
        <div className=" bg-primary rounded-md px-5 py-4">
          <div className=" flex lg:flex-row flex-col items-center justify-between">
            <div className=" lg:flex-row flex-col  flex items-center gap-3 lg:gap-7">
              <Image src={data?.teacherImg} alt="avatar" width={50} />
              <div className=" text-center lg:text-left">
                <h3 className=" text-[20px] lg:text-[16px] text-white ">
                  {data?.name}
                </h3>
                <p className=" text-[14px] text-[#75b4ce]">{data?.roll}</p>
              </div>
              <div className=" text-center lg:text-left">
                <h3 className=" text-[16px] text-white">{data?.degree}</h3>
                <p className=" text-[14px] text-[#75b4ce]">{data?.subj}</p>
              </div>
            </div>
            <div className=" bg-secoundary rounded-full">
              <p className=" px-10 py-2 text-white font-semibold">
                {data?.courceFee}
              </p>
            </div>
          </div>
        </div>
        <div className=" space-y-5">
          <SubjectDetails data={data} />
          <WhatYouWillLearn data={data} />
          <StudyOptions data={data} />
          <div className=" space-y-5">
            <h1 className=" text-[30px] font-bold text-slate-800">
              {data?.courceTitle4}
            </h1>
            <div className=" text-[14px] text-gray-500 space-y-5">
              <p>{data?.desc5}</p>
            </div>
          </div>

          <div>
            <div>
              <AccordionMenu
                title={data?.accordionTitle1}
                desc={data?.accordionDec1}
              />
              <AccordionMenu
                title={data?.accordionTitle2}
                desc={data?.accordionDec2}
              />
              <AccordionMenu
                title={data?.accordionTitle3}
                desc={data?.accordionDec3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;

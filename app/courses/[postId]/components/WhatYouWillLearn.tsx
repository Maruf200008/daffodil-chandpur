import Image from "next/image";
import TickImg from "../../../images/tick.png";

const WhatYouWillLearn = ({
  data,
}: {
  data?: {
    courceTitle2: string;
    desc3: string;
    desc4: string;
    tickTitle1: string;
    tickTitle2: string;
    tickTitle3: string;
    tickTitle4: string;
  };
}) => {
  return (
    <>
      <div className=" space-y-5">
        <h2 className=" text-[25px] font-bold text-slate-800">
          {data?.courceTitle2}
        </h2>
        <div className=" text-[14px] text-gray-500 space-y-5">
          <p>{data?.desc3}</p>
          <p>{data?.desc4}</p>

          <div className=" space-y-5">
            <div className=" grid lg:grid-cols-2 items-center gap-5 lg:gap-10">
              <div className=" flex items-center gap-3">
                <div className=" border-2 rounded-full p-1">
                  <Image src={TickImg} alt="TickImg" width={15} />
                </div>
                <p>{data?.tickTitle1}</p>
              </div>
              <div className=" flex items-center gap-3">
                <div className=" border-2 rounded-full p-1">
                  <Image src={TickImg} alt="TickImg" width={15} />
                </div>
                <p>{data?.tickTitle2}</p>
              </div>
            </div>
            <div className=" grid lg:grid-cols-2 items-center gap-5 lg:gap-10">
              <div className=" flex  items-center gap-3">
                <div className=" border-2 rounded-full p-1">
                  <Image src={TickImg} alt="TickImg" width={15} />
                </div>
                <p>{data?.tickTitle3}</p>
              </div>
              <div className=" flex   items-center gap-3">
                <div className=" border-2 rounded-full p-1">
                  <Image src={TickImg} alt="TickImg" width={15} />
                </div>
                <p>{data?.tickTitle4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatYouWillLearn;

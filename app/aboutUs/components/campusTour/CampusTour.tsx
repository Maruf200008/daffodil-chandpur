import Image from "next/image";
import feaIcon1 from "../../../images/fea-icon01.png";
import stepImg2 from "../../../images/steps-img-2.png";

const CampusTour = () => {
  return (
    <div className=" bg-primary overflow-hidden px-5 sm:px-14 xl:px-0 lg:px-[50px] ">
      <div className="  grid lg:grid-cols-2 items-start lg:items-center xl:items-start justify-between  ">
        <div className="xl:ml-32 ">
          <div className=" py-10 xl:py-28 space-y-5  ">
            <div>
              <div className=" space-y-10 mt-9">
                <div className=" flex  flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start gap-5 mt-7 overflow-hidden ">
                  <div className=" w-[65px] h-[65px] md:h-[80px] md:w-[80px] lg:w-[100px] 2xl:w-[70px] lg:h-[70px] bg-secoundary rounded-full flex items-center justify-center">
                    <Image src={feaIcon1} alt="" className=" lg:w-[40px]" />
                  </div>
                  <div className="  space-y-4 lg:mr-6">
                    <h2 className=" text-white text-[30px] md:text-[40px] xl:text-[45px] font-bold">
                      Campus Tour
                    </h2>
                    <p className=" text-[14px] sm:text-[17px]  text-[#96bece] font-medium">
                      Campus on a tour designed for prospective graduate and
                      professional students. You will see how our university
                      like, facilities, studenst and life in this university.
                      Meet our graduate admissions representative to learn more
                      about our graduate programs and decide what it the best
                      for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden    mb-16 lg:mb-0 lg:h-full lg:mr-[-70px] ">
          <Image src={stepImg2} alt="" className="  object-cover h-full " />
        </div>
      </div>
    </div>
  );
};

export default CampusTour;

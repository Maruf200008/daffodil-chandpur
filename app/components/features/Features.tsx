import Image from "next/image";
import feaIcon1 from "../../images/fea-icon01.png";
import feaIcon2 from "../../images/fea-icon02.png";
import feaIcon3 from "../../images/fea-icon03.png";
import stepImg from "../../images/steps-img.png";

const Features = () => {
  return (
    <div className="  bg-[#032e3f] mb-20 overflow-hidden px-5 sm:px-14 xl:px-0 lg:px-[50px] ">
      <div className="  grid lg:grid-cols-2 items-start lg:items-center xl:items-start justify-between gap-x-14">
        <div className="xl:ml-32">
          <div className=" py-28 space-y-5  ">
            <h2 className=" text-white text-center md:text-start  text-[45px] sm:text-[55px] font-bold lg:text-[45px]">
              Our Best Features
            </h2>
            <p className="  text-[#96bece] text-center md:text-start text-[18px] sm:text-[22px] lg:text-[18px] font-medium">
              Special wedding garments are often worn, and the ceremony is
              sometimes followed by a wedding reception. Music, poetry.
            </p>
            <div>
              <div className=" space-y-10 mt-9">
                <div className=" flex md:flex-row flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start gap-5 mt-7 overflow-hidden">
                  <div className=" w-[65px] h-[65px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[70px] 2xl:w-[70px] bg-secoundary rounded-full flex items-center justify-center">
                    <Image src={feaIcon1} alt="" className=" lg:w-[40px]" />
                  </div>
                  <div className=" md:w-[500px] space-y-4">
                    <h2 className=" text-white text-[30px] font-bold">
                      Skilled Teachers
                    </h2>
                    <p className=" text-[14px] sm:text-[17px] text-[#96bece] font-medium">
                      Special wedding garments are often worn, and the ceremony
                      is sttimes followed by a wedding reception. Music, poetry,
                      prayers, or readings from.
                    </p>
                  </div>
                </div>
                <div className=" flex md:flex-row flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start gap-5 mt-7 overflow-hidden">
                  <div className="  w-[65px] h-[65px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[70px] 2xl:w-[70px] bg-secoundary rounded-full flex items-center justify-center">
                    <Image src={feaIcon2} alt="" className=" lg:w-[40px]" />
                  </div>
                  <div className="  md:w-[500px] space-y-4">
                    <h2 className=" text-white text-[30px] font-bold">
                      Affordable Courses
                    </h2>
                    <p className=" text-[14px] sm:text-[17px] text-[#96bece] font-medium">
                      Special wedding garments are often worn, and the ceremony
                      is sttimes followed by a wedding reception. Music, poetry,
                      prayers, or readings from.
                    </p>
                  </div>
                </div>
                <div className=" flex md:flex-row flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start gap-5 mt-7 overflow-hidden">
                  <div className=" w-[65px] h-[65px] md:h-[80px] md:w-[80px] lg:w-[100px] 2xl:w-[70px] lg:h-[70px] bg-secoundary rounded-full flex items-center justify-center">
                    <Image src={feaIcon3} alt="" className=" lg:w-[40px]" />
                  </div>
                  <div className=" md:w-[500px] space-y-4">
                    <h2 className=" text-white text-[30px] font-bold">
                      Efficient & Flexible
                    </h2>
                    <p className=" text-[14px] sm:text-[17px] text-[#96bece] font-medium">
                      Special wedding garments are often worn, and the ceremony
                      is sttimes followed by a wedding reception. Music, poetry,
                      prayers, or readings from.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden  lg:h-[800px]  mb-16 lg:mb-0 xl:h-full lg:mr-[-100px] xl:mr-[-30px]">
          <Image src={stepImg} alt="" className="  object-cover h-full " />
        </div>
      </div>
    </div>
  );
};

export default Features;

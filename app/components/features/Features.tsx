import Image from "next/image";
import feaIcon1 from "../../images/fea-icon01.png";
import feaIcon2 from "../../images/fea-icon02.png";
import feaIcon3 from "../../images/fea-icon03.png";
import stepImg from "../../images/steps-img.png";

const Features = () => {
  return (
    <div className="  bg-[#0d4257] mb-20 w-full">
      <div className=" px-10 md:px-0 md:pl-32  flex md:flex-row flex-col items-start justify-between gap-x-6 ">
        <div className=" py-28 space-y-5 ">
          <h2 className=" text-white text-center md:text-start  text-[35px] md:text-[50px] font-bold">
            Our Best Features
          </h2>
          <p className="  text-[#96bece] text-center md:text-start">
            Special wedding garments are often worn, and the ceremony is
            sometimes followed by a wedding reception. Music, poetry.
          </p>
          <div>
            <div>
              <div className=" flex items-start justify-start gap-x-5 mt-7 overflow-hidden">
                <div className=" w-[80px] h-[65px] md:h-[80px] md:w-[80px] bg-secoundary rounded-full flex items-center justify-center">
                  <Image src={feaIcon1} alt="" />
                </div>
                <div className=" w-full md:w-[500px] space-y-4">
                  <h2 className=" text-white text-[30px] font-bold">
                    Skilled Teachers
                  </h2>
                  <p className=" text-[13px] text-[#96bece]">
                    Special wedding garments are often worn, and the ceremony is
                    sttimes followed by a wedding reception. Music, poetry,
                    prayers, or readings from.
                  </p>
                </div>
              </div>
              <div className=" flex items-start justify-start gap-x-5 mt-7">
                <div className=" w-[80px] h-[65px] md:h-[80px] md:w-[80px] bg-secoundary rounded-full flex items-center justify-center">
                  <Image src={feaIcon2} alt="" />
                </div>
                <div className=" w-full md:w-[500px] space-y-4">
                  <h2 className=" text-white text-[30px] font-bold">
                    Affordable Courses
                  </h2>
                  <p className=" text-[13px] text-[#96bece]">
                    Special wedding garments are often worn, and the ceremony is
                    sttimes followed by a wedding reception. Music, poetry,
                    prayers, or readings from.
                  </p>
                </div>
              </div>
              <div className=" flex items-start justify-start gap-x-5 mt-7">
                <div className=" w-[80px] h-[65px] md:h-[80px] md:w-[80px] bg-secoundary rounded-full flex items-center justify-center">
                  <Image src={feaIcon3} alt="" />
                </div>
                <div className=" w-full md:w-[500px] space-y-4">
                  <h2 className=" text-white text-[30px] font-bold">
                    Efficient & Flexible
                  </h2>
                  <p className=" text-[13px] text-[#96bece]">
                    Special wedding garments are often worn, and the ceremony is
                    sttimes followed by a wedding reception. Music, poetry,
                    prayers, or readings from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden w-full md:h-[800px] md:w-[900px] mb-16 md:mb-0">
          <Image
            src={stepImg}
            alt=""
            className=" md:mr-[-130px] w-full object-cover h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

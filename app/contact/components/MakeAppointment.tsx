import { IoIosMailOpen } from "react-icons/io";
import { MdLocationPin, MdWifiCalling3 } from "react-icons/md";

const MakeAppointment = () => {
  return (
    <div className="lg:px-[50px] py-24 sm:px-16 md:py-28 xl:px-32 px-5 ">
      <h1 className=" text-center text-[30px]  sm:text-[45px] font-bold">
        Make Appointment
      </h1>
      <div className="grid lg:grid-cols-3  gap-10 mt-10">
        <div>
          <div className=" flex items-center justify-center flex-col gap-5 bg-[#eff7ff] hover:bg-[#fff7ef] rounded-md py-10">
            <div className=" bg-white p-4 sm:p-7 text-[30px] sm:text-[50px] rounded-full shadow-xl text-slate-700">
              <MdWifiCalling3 />
            </div>
            <div className=" text-center space-y-3 md:space-y-5">
              <h2 className=" mt-5 text-[18px]  sm:text-[25px] font-bold text-slate-700 hover:text-secoundary cursor-pointer transition">
                +1 (444) 000-8888
              </h2>
              <p className=" text-slate-400 text-[14px] sm:text-[16px]">
                Phone Support
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center  flex-col gap-5 bg-[#fff7ef] rounded-md py-10">
            <div className=" bg-white p-4 sm:p-7 text-[30px] sm:text-[50px] rounded-full shadow-xl text-slate-700">
              <IoIosMailOpen />
            </div>
            <div className=" text-center space-y-3 sm:space-y-5 ">
              <h2 className=" mt-5 text-[18px]   sm:text-[25px] font-bold text-slate-700 hover:text-secoundary cursor-pointer transition">
                jobs@webtrueexample.com
              </h2>
              <p className=" text-slate-400 text-[14px] sm:text-[16px]">
                Email Address
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center flex-col gap-5 bg-[#eff7ff] hover:bg-[#fff7ef] rounded-md py-10">
            <div className=" bg-white p-4 sm:p-7 text-[30px] sm:text-[50px] rounded-full shadow-xl text-slate-700">
              <MdLocationPin />
            </div>
            <div className=" text-center space-y-3 md:space-y-5">
              <h2 className=" mt-5 text-[18px]  sm:text-[25px]  font-bold text-slate-700 ">
                12/A, New Jone, NYC
              </h2>
              <p className=" text-slate-400 text-[14px] sm:text-[16px]">
                Office Address
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;

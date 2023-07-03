import Image from "next/image";
import sentMail from "../../images/send-mail.png";

const Subscribe = () => {
  return (
    <div className=" bg-primary px-5 sm:px-14 py-14 xl:px-32 mt-20 md:mt-0 lg:px-[50px] ">
      <div className=" flex lg:flex-row flex-col  items-center justify-between gap-y-5">
        <div className=" flex md:flex-row flex-col items-center gap-6">
          <div>
            <Image src={sentMail} alt="" className=" sm:w-[80px] lg:w-[50px]" />
          </div>
          <div className=" text-white">
            <h2 className=" text-[40px] font-bold text-center md:text-left">
              Subscribe for Newsletter
            </h2>
            <p className=" text-[18px] text-center md:text-left">
              Manage Your Business With Our Software
            </p>
          </div>
        </div>
        <div className=" lg:w-[35%] w-full">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              type="email"
              className="block w-full p-6  text-sm text-gray-900 border focus:outline-none rounded-md "
              placeholder="Email Address..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-3.5 bottom-2.5  bg-primary  focus:outline-none  font-medium rounded-lg text-sm px-5 py-4 "
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaPinterestP, FaWordpressSimple } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div className=" space-y-5">
      <h2 className=" text-[18px]">Follow Us</h2>
      <div className=" h-[1px] bg-slate-200 mt-4 relative">
        <div className=" w-[80px] h-[1px] bg-secoundary "></div>
      </div>
      <div className=" flex items-center gap-5 text-[16px] text-gray-400 ">
        <div className=" border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-secoundary hover:border-secoundary hover:text-white transition ">
          <AiOutlineTwitter />
        </div>
        <div className=" border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-secoundary hover:border-secoundary hover:text-white transition ">
          <FaPinterestP />
        </div>
        <div className=" border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-secoundary hover:border-secoundary hover:text-white transition ">
          <FaFacebookF />
        </div>
        <div className=" border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-secoundary hover:border-secoundary hover:text-white transition ">
          <AiOutlineInstagram />
        </div>
        <div className=" border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-secoundary hover:border-secoundary hover:text-white transition ">
          <FaWordpressSimple />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;

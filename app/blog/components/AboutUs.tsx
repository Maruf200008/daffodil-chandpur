import Image from "next/image";
import img from "../../images/team10.png";

const AboutUs = () => {
  return (
    <div className=" space-y-5">
      <h2 className=" text-[18px]">About Us</h2>
      <div className=" h-[1px] bg-slate-200 mt-4 relative">
        <div className=" w-[80px] h-[1px] bg-secoundary" />
      </div>
      <div className=" flex flex-col gap-5 items-center justify-center ">
        <Image src={img} alt="" className=" mt-5" />
        <div className=" text-center">
          <h2 className=" text-[18px] font-semibold">Rosalina D. Willaimson</h2>
          <p className=" mt-3 text-[16px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

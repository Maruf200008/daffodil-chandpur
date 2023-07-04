import Image from "next/image";
import img3 from "../../images/inner_b4.jpg";
import img1 from "../../images/inner_b8.jpg";
import img2 from "../../images/inner_b9.jpg";

const RecentPosts = () => {
  return (
    <div className=" space-y-5">
      <h2 className=" text-[18px]">Recent Posts</h2>
      <div className=" h-[1px] bg-slate-200 mt-4 relative">
        <div className=" w-[80px] h-[1px] bg-secoundary "></div>
      </div>

      <div className=" space-y-5">
        <div>
          <div className=" grid grid-cols-3 items-center gap-4 mt-10">
            <Image src={img1} alt="img" />
            <div className=" col-span-2 space-y-3">
              <h2 className=" md:text-[22px] lg:text-[16px]">
                Planting Seeds in the Hearts of Preschooler
              </h2>
              <p className=" text-[14px] text-gray-400">March 8, 2023</p>
            </div>
          </div>
          <div className=" h-[1px] bg-slate-200 mt-4 relative" />
        </div>
        <div>
          <div className=" grid grid-cols-3 items-center gap-4 mt-10">
            <Image src={img2} alt="img" />
            <div className=" col-span-2 space-y-3">
              <h2 className="md:text-[22px] lg:text-[16px]">
                Why children need a Healthy Environment thousand
              </h2>
              <p className=" text-[14px] text-gray-400">March 8, 2023</p>
            </div>
          </div>
          <div className=" h-[1px] bg-slate-200 mt-4 relative" />
        </div>
        <div>
          <div className=" grid grid-cols-3 items-center gap-4 mt-10">
            <Image src={img3} alt="img" />
            <div className=" col-span-2 space-y-3">
              <h2 className=" md:text-[22px] lg:text-[16px]">
                Full-day kindergarten in Alberta kindergarten saves families.
              </h2>
              <p className=" text-[14px] text-gray-400">March 8, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;

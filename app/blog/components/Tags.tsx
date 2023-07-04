const Tags = () => {
  return (
    <div className=" space-y-5">
      <h2 className=" text-[18px]">Tags</h2>
      <div className=" h-[1px] bg-slate-200 mt-4 relative">
        <div className=" w-[80px] h-[1px] bg-secoundary" />
      </div>
      <div className=" space-y-3">
        <div className=" flex gap-3">
          <div className=" border px-4 md:px-6 lg:px-4 xl:px-6 py-3 text-[14px] text-gray-500 hover:border-secoundary cursor-pointer group transition">
            <p className=" group-hover:text-secoundary transition">App</p>
          </div>
          <div className=" border px-4 md:px-6 lg:px-4 xl:px-6 py-3 text-[14px] text-gray-500 hover:border-secoundary cursor-pointer group transition">
            <p className=" group-hover:text-secoundary transition">Design</p>
          </div>
          <div className=" border px-4 md:px-6 lg:px-4 xl:px-6 py-3 text-[14px] text-gray-500 hover:border-secoundary cursor-pointer group transition">
            <p className=" group-hover:text-secoundary transition">
              development
            </p>
          </div>
        </div>
        <div className=" flex gap-3">
          <div className="border px-4 md:px-6 lg:px-4 xl:px-6  py-3 text-[14px] text-gray-500 hover:border-secoundary cursor-pointer group transition">
            <p className=" group-hover:text-secoundary transition">Gallery</p>
          </div>
          <div className=" border px-4 md:px-6 lg:px-4 xl:px-6  py-3 text-[14px] text-gray-500 hover:border-secoundary cursor-pointer group transition">
            <p className="group-hover:text-secoundary transition">Web Design</p>
          </div>
          <div className="border px-4 md:px-6 lg:px-4 xl:px-6  py-3 text-[14px] text-gray-500 hover:border-secoundary cursor-pointer group transition">
            <p className="group-hover:text-secoundary transition">Wordpress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;

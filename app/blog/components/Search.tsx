const Search = () => {
  return (
    <div className=" space-y-5 mt-10 lg:mt-0">
      <h2 className=" text-[18px]">Search</h2>
      <div className=" h-[1px] bg-slate-200 mt-4 relative">
        <div className=" w-[80px] h-[1px] bg-secoundary "></div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input
          type="text"
          className="block p-6 w-full  text-sm text-gray-900 border focus:outline-none rounded-md bg-slate-50 "
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-3.5 bottom-2.5 bg-secoundary  focus:outline-none  font-medium rounded-lg text-sm px-5 py-4 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;

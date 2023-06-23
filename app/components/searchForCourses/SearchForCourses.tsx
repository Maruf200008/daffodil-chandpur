const SearchForCourses = () => {
  return (
    <div className=" bg-[url('https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/search_bg.png')] bg-center px-28 py-[100px] mb-20 bg-cover bg-no-repeat ">
      <div className=" w-[50%] space-y-5">
        <h2 className=" text-white text-[40px] font-bold">
          Search For Courses
        </h2>
        <p className=" text-[#b0cbd7]">
          Our community is being called to reimagine the future. As the only
          university where a renowned design school comes together with premier
          colleges, we are making learning more relevant and transformational.
        </p>
        <div>
          <form action="" className=" w-[100%] text-[14px] space-y-5">
            <div className=" flex flex-row gap-x-5 ">
              <input
                type="text"
                placeholder="Your Name"
                className=" focus:outline-none py-3 px-5 rounded-md w-[40%]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className=" focus:outline-none py-3 px-5 rounded-md w-[40%] "
              />
            </div>
            <div className=" flex flex-row gap-x-5 ">
              <select className="bg-gray-50 border   rounded-lg  block w-[40%] p-2.5 focus:outline-none text-gray-400   ">
                <option selected>Instructor</option>
                <option value="US">Albert Coman (PhD)</option>
                <option value="CA">Angelina Jones (PhD)</option>
                <option value="FR">Bruce Willis (PhD)</option>
              </select>
              <select className="bg-gray-50 border   rounded-lg  block w-[40%] p-2.5 focus:outline-none text-gray-400   ">
                <option selected>Instructor</option>
                <option value="US">Albert Coman (PhD)</option>
                <option value="CA">Angelina Jones (PhD)</option>
                <option value="FR">Bruce Willis (PhD)</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForCourses;

import { BsArrowRight } from "react-icons/bs";

const SearchForCourses = () => {
  return (
    <div className=" bg-[url('https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/search_bg.png')] bg-center px-5 md:px-28 py-[100px] mb-20 bg-cover bg-no-repeat mt-16 ">
      <div className=" md:w-[50%] space-y-5 text-center md:text-left">
        <h2 className=" text-white text-[50px] font-bold">
          Search For Courses
        </h2>
        <p className=" text-[#b0cbd7] text-[18px] font-medium">
          Our community is being called to reimagine the future. As the only
          university where a renowned design school comes together with premier
          colleges, we are making learning more relevant and transformational.
        </p>
        <div>
          <form action="" className=" w-full text-[14px] space-y-5">
            <div className=" flex flex-col  md:flex-row gap-5 ">
              <input
                type="text"
                placeholder="Your Name"
                className=" focus:outline-none py-3 px-5 rounded-md md:w-[48%]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className=" focus:outline-none py-3 px-5 rounded-md md:w-[48%] "
              />
            </div>
            <div className=" flex flex-col  md:flex-row gap-5 ">
              <select className="bg-gray-50 border   rounded-lg  block md:w-[48%] p-2.5 focus:outline-none text-gray-400   ">
                <option selected>Instructor</option>
                <option value="US">Albert Coman (PhD)</option>
                <option value="CA">Angelina Jones (PhD)</option>
                <option value="FR">Bruce Willis (PhD)</option>
              </select>
              <select className="bg-gray-50 border   rounded-lg  block md:w-[48%] p-2.5 focus:outline-none text-gray-400   ">
                <option selected>Department</option>
                <option value="US">Hot Stone Message</option>
                <option value="CA">Facil & Therophy</option>
              </select>
            </div>
            <div className=" flex flex-col  md:flex-row gap-5 ">
              <select className="bg-gray-50 border   rounded-lg  block md:w-[48%] p-2.5 focus:outline-none text-gray-400   ">
                <option selected>Campus</option>
                <option value="US">Hot Stone Message</option>
                <option value="CA">Facil & Therophy</option>
              </select>
              <select className="bg-gray-50 border   rounded-lg  block md:w-[48%] p-2.5 focus:outline-none text-gray-400   ">
                <option selected>Level</option>
                <option value="US">Hot Stone Message</option>
                <option value="CA">Facil & Therophy</option>
              </select>
            </div>
            <button className=" bg-secoundary  w-[100%] py-4 text-white rounded-md hover:bg-primary transition text-[16px] flex items-center justify-center gap-x-4">
              Search Courses Here
              <BsArrowRight size={25} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForCourses;

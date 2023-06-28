import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import NavOption from "./NavOption";
const Navbar = () => {
  return (
    <>
      <div className=" lg:h-[80px] lg:px-[50px] lg:mt-[15px]  xl:px-32 pt-0  ">
        {/* Navbar contact bar */}
        <div className=" hidden lg:block ">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center text-white gap-x-4  ">
              <p>Follow us:-</p>
              <div className=" flex items-center gap-x-4">
                <Link
                  passHref
                  href="https://www.facebook.com/dicchandpur"
                  target="_"
                  className=" cursor-pointer hover:text-[#96d7fa] transition"
                >
                  <FaFacebookF size={22} />
                </Link>
                <Link
                  href=""
                  passHref
                  className=" cursor-pointer hover:text-[#96d7fa] transition"
                >
                  <FaInstagram size={22} />
                </Link>
                <Link
                  href=""
                  passHref
                  className=" cursor-pointer hover:text-[#96d7fa] transition"
                >
                  <FaTwitter size={22} />
                </Link>
                <Link
                  href=""
                  passHref
                  className=" cursor-pointer hover:text-[#96d7fa] transition"
                >
                  <FaYoutube size={22} />
                </Link>
              </div>
            </div>
            <div className=" flex items-center gap-x-5  first-header">
              <div className=" flex items-center pr-4 gap-x-3 text-white border-r">
                <MdWifiCalling3 size={30} className=" z-20  text-secoundary" />
                <div>
                  <p className=" text-[14px]">Call Now !</p>
                  <h2 className=" text-lg font-semibold">+91 7052 101 786</h2>
                </div>
              </div>

              <div className=" flex items-center gap-x-3 text-white second-header">
                <IoIosMailUnread size={30} className="text-secoundary" />
                <div>
                  <p className=" text-[14px]">Email Now</p>
                  <h2 className=" text-lg font-semibold">info@example.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavOption />
    </>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import footerLogo from "../../images/f_logo.png";
import sBlogimg1 from "../../images/s-blogimg-01.png";
import sBlogimg2 from "../../images/s-blogimg-02.png";
import sentMail from "../../images/send-mail.png";
const Footer = () => {
  return (
    <>
      <div className=" bg-primary py-14 md:px-32">
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-x-6">
            <div>
              <Image src={sentMail} alt="" />
            </div>
            <div className=" text-white">
              <h2 className=" text-[40px] font-bold">
                Subscribe for Newsletter
              </h2>
              <p className=" text-[18px]">
                Manage Your Business With Our Software
              </p>
            </div>
          </div>
          <div className=" w-[35%]">
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
      <div className=" bg-[url('https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/footer-bg.png')] bg-center md:px-28 py-[100px] bg-cover bg-no-repeat ">
        <div className=" grid md:grid-cols-5 gap-x-8">
          <div className=" space-y-7 col-span-2">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                About Us
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <p className=" text-[#b2c0d8] text-[18px] mr-10">
              Suspendisse non sem ante. Cras pretium gravida leo a convallis.
              Nam malesuada interdum metus, sit amet dictum ante congue eu.
              Maecenas ut maximus enim.
            </p>
            <div className=" flex items-center gap-x-5">
              <Link
                href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a"
                passHref
                className=" bg-[#99A3AC]/50 p-2 rounded-full text-white hover:bg-secoundary transition"
              >
                <FaFacebookF size={21} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a"
                passHref
                className=" bg-[#99A3AC]/50 p-2 rounded-full text-white hover:bg-secoundary transition"
              >
                <FaInstagram size={21} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a"
                passHref
                className=" bg-[#99A3AC]/50 p-2 rounded-full text-white hover:bg-secoundary transition"
              >
                <AiOutlineTwitter size={21} />
              </Link>
            </div>
          </div>
          <div className=" space-y-5 ">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                Our Links
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <ul className=" flex flex-col gap-y-3 text-[#b2c0d8] font-semibold  ">
              <Link href="" className="hover:text-secoundary transition">
                Home
              </Link>
              <Link href="" className="hover:text-secoundary transition">
                About Us
              </Link>
              <Link href="" className="hover:text-secoundary transition">
                Courses
              </Link>
              <Link href="" className="hover:text-secoundary transition">
                Blog
              </Link>
              <Link href="" className="hover:text-secoundary transition">
                Contact
              </Link>
            </ul>
          </div>
          <div className=" space-y-5  ml-[-70px]">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                Latest Post
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <div className=" space-y-5">
              <div className=" flex items-center gap-x-3">
                <Image src={sBlogimg1} alt="" />
                <div className=" space-y-2">
                  <h2 className="font-medium text-gray-300 cursor-pointer transition hover:text-white">
                    Nothing impossble to need hard work
                  </h2>
                  <p className=" font-medium text-secoundary">7 March, 2023</p>
                </div>
              </div>
              <div className=" flex items-center gap-x-3">
                <Image src={sBlogimg2} alt="" />
                <div className=" space-y-2">
                  <h2 className="font-medium text-gray-300 cursor-pointer transition hover:text-white">
                    Nothing impossble to need hard work
                  </h2>
                  <p className=" font-medium text-secoundary">23 July, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-5 ml-[-20px] ">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                Contact Us
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <div className=" space-y-5">
              <div className=" flex items-center gap-x-3 text-white">
                <div className=" bg-secoundary p-2 rounded-full">
                  <AiOutlinePhone size={20} />
                </div>
                <div className="text-[#b2c0d8] font-medium">
                  <p className=" hover:text-white transition cursor-pointer">
                    +1 (444) 000-8888
                  </p>
                  <p className=" hover:text-white transition cursor-pointer">
                    +91 7052 101 786
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-x-3 text-white">
                <div className=" bg-secoundary p-2 rounded-full">
                  <GoMail size={20} />
                </div>
                <div className="text-[#b2c0d8] font-medium">
                  <p className=" hover:text-white transition cursor-pointer">
                    info@example.com
                  </p>
                  <p className=" hover:text-white transition cursor-pointer">
                    help@example.com
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-x-3 text-white">
                <div className=" bg-secoundary p-2 rounded-full">
                  <SlLocationPin size={20} />
                </div>
                <div className="text-[#b2c0d8] font-medium">
                  <p>1247/Plot No. 39, 15th Phase,</p>
                  <p>LHB Colony, Kanpur</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className=" bg-secoundary py-5 md:px-32">
        <div className=" flex md:flex-row flex-col items-center justify-between">
          <Image src={footerLogo} alt="" className=" w-[180px]" />
          <p className=" text-white font-medium">
            Copyright © Mohammad Maruf 2023 . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

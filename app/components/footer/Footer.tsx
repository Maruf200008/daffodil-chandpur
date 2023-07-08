import Image from "next/image";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import logo from "../../images/logo.png";
import sBlogimg1 from "../../images/s-blogimg-01.png";
import sBlogimg2 from "../../images/s-blogimg-02.png";
const Footer = () => {
  const footerLink = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About Us",
      href: "/aboutUs",
    },
    {
      text: "Courses",
      href: "/courses",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <div className=" bg-[#00173c] px-5 sm:px-14 lg:px-[50px] xl:px-28 py-[100px] bg-cover bg-no-repeat ">
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" space-y-7  ">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                About Us
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <p className=" text-[#b2c0d8] text-[18px] md:mr-10">
              Suspendisse non sem ante. Cras pretium gravida leo a convallis.
              Nam malesuada interdum metus, sit amet dictum ante congue eu.
              Maecenas ut maximus enim.
            </p>
            <div className=" flex flex-row items-center gap-x-5">
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

          <div className=" space-y-5 mt-10 md:mt-0 ">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                Our Links
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <ul className=" flex flex-col gap-y-3 text-[#b2c0d8] font-semibold  ">
              {footerLink.map((data, index) => (
                <Link
                  key={index}
                  href={data.href}
                  className=" hover:text-secoundary transition"
                >
                  {data.text}
                </Link>
              ))}
            </ul>
          </div>
          <div className=" space-y-5  ">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                Latest Post
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <div className=" space-y-5">
              <div className=" flex  items-center  gap-x-3   ">
                <Image src={sBlogimg1} alt="" />
                <div className=" space-y-2">
                  <h2 className="font-medium text-gray-300 cursor-pointer transition hover:text-white">
                    Nothing impossble to need hard work
                  </h2>
                  <p className=" font-medium text-secoundary">7 March, 2023</p>
                </div>
              </div>
              <div className=" flex  items-center gap-x-3">
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
          <div className=" space-y-5  ">
            <div>
              <h2 className=" text-white text-[25px] font-semibold ">
                Contact Us
              </h2>
              <div className=" w-[70px] h-[1px] bg-secoundary mt-2" />
            </div>
            <div className=" space-y-5">
              <div className=" flex items-center  gap-x-3 text-white">
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
              <div className=" flex items-center  gap-x-3 text-white">
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
        </div>
      </div>
      <div className=" bg-secoundary md:py-5 py-14 xl:px-32 px-5 lg:px-[50px]">
        <div className=" flex lg:flex-row flex-col items-center justify-between space-y-5">
          <Image src={logo} alt="" className=" w-[180px]" />
          <p className=" text-white font-medium text-center md:text-left text-[16px]  ">
            Copyright © Mohammad Maruf 2023 . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

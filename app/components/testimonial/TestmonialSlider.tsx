"use client";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import qt from "../../images/qt-icon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import avator1 from "../../images/testi_avatar.png";
import avator2 from "../../images/testi_avatar_02.png";
import avator3 from "../../images/testi_avatar_03.png";

// import required modules
import { Navigation } from "swiper";

const TestmonialSlider = () => {
  interface Slider {
    desc: string;
    img: string | StaticImageData;
    name: string;
    roll: string;
  }
  const sliderData: Slider[] = [
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator1,
      name: "Margie Dose",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator2,
      name: "Rock Dloder",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator3,
      name: "Roboto Eorure",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator1,
      name: "Margie Dose",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator2,
      name: "Rock Dloder",
      roll: "Web Designer",
    },
    {
      desc: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.",
      img: avator3,
      name: "Roboto Eorure",
      roll: "Web Designer",
    },
  ];

  return (
    <>
      <Swiper
        // Responsive breakpoints
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {sliderData.map((data, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <div className=" 2xl:w-[400px]  2xl:h-[420px] bg-[#f0f7ff] hover:bg-white hover:shadow-2xl hover:shadow-gray-200   duration-150 overflow-hidden relative">
                  <div className=" p-7 space-y-5 flex items-center justify-center flex-col text-center gap-y-3">
                    <div>
                      <Image src={qt} alt="" />
                    </div>
                    <p className=" text-[15px] sm:text-[18px] md:text-[22px] text-gray-400 lg:text-[16px]">
                      {data.desc}
                    </p>
                    <div>
                      <Image
                        src={data.img}
                        alt=""
                        className=" md:w-[110px] lg:w-[70px]"
                      />
                    </div>
                    <div>
                      <h2 className=" text-[18px] md:text-[22px] font-semibold text-gray-600 lg:text-[18px]">
                        {data.name}
                      </h2>
                      <p className=" text-[12px] text-gray-500">{data.roll}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestmonialSlider;

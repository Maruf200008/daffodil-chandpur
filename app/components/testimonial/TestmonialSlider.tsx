"use client";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import qt from "../../images/qt-icon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const TestmonialSlider = ({ data }) => {
  const { desc, img, name, roll } = data;
  return (
    <>
      <Swiper
        // Responsive breakpoints
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-[400px]  h-[420px] bg-[#f0f7ff] hover:bg-white hover:shadow-2xl hover:shadow-gray-200   duration-150 overflow-hidden relative">
            <div className=" p-7 space-y-5 flex items-center justify-center flex-col text-center gap-y-3">
              <div>
                <Image src={qt} alt="" />
              </div>
              <p className=" text-[15px] text-gray-400">{desc}</p>
              <div>
                <Image src={img} alt="" />
              </div>
              <div>
                <h2 className=" text-[18px] font-semibold text-gray-600">
                  {name}
                </h2>
                <p className=" text-[12px] text-gray-500">{roll}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestmonialSlider;

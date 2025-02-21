import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

function Galleryslider({ pics }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log("data", pics?.images?.map((img) => img.secure_url));

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 1, spaceBetween: 25 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Array.isArray(pics?.images) &&
          pics.images.map((pic, index) => (
            <SwiperSlide key={pic._id || index}>
              <div className="bg-[#4C4C4C] shadow-lg rounded-lg p-6 border w-[650px] mx-auto  border-gray-200 hover:shadow-xl transition-shadow duration-300 py-20 overflow-hidden mt-10">
                <div className="flex gap-4">
                  <div className="flex items-center mx-auto">
                    <img
                      src={pic.secure_url}
                      alt="Gallery"
                      className="w-[350px] h-[400px]"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Swiper Navigation Buttons */}
      <button
        ref={prevRef}
        className="swiper-button-prev absolute lg:!left-[400px] text-white px-8 py-8 h-6 w-6 mt-4 top-1/2 transform -translate-y-1/2 z-10 text-xs font-semibold scale-50 flex items-center justify-center"
      ></button>
      <button
        ref={nextRef}
        className="swiper-button-next absolute lg:!right-[400px] text-white px-8 py-8 h-6 w-6 mt-4 top-1/2 transform -translate-y-1/2 z-10 text-xs font-semibold scale-50 flex items-center justify-center"
      ></button>
    </div>
  );
}

export default Galleryslider;

import React, { useRef } from "react";
import { FaLongArrowAltLeft, FaSearch } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ObituariesSec() {
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FaLongArrowAltLeft />, // Custom Prev Arrow
    nextArrow: <FaLongArrowAltRight />, // Custom Next Arrow
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <div className="rounded-3xl border border-[#0F4B11] mx-auto w-80 px-4 py-2 flex flex-row items-center">
        <span className="text-gray-400">Search here..</span>{" "}
        <FaSearch className="mx-auto  text-gray-400" size={18} />{" "}
      </div>
      <div className=" flex mx-auto items-center w-full px-4 py-8 flex-col gap-10 bg-black">
        <h1 className="text-4xl text-center">Current Obituaries</h1>
        <div className="flex flex-row gap-40">
          <div>Send Flower</div>
          <div>Obituary notification</div>
          <div>View All</div>
        </div>
        <div>Select the arrows to slide between Obituary pages.</div>
 

      <div className="relative w-full max-w-3xl mx-auto">
        {/* Custom Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-md z-10"
          onClick={prev}
        >
      <FaLongArrowAltLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-md z-10"
          onClick={next}
        >
          <FaLongArrowAltRight />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="w-full">
          <div className=" text-center flex flex-col gap-30 ">
            <div className=" w-full flex flex-row gap-8">
              <div className=" bg-black-300 text-center flex flex-col gap-4">
                <div>
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="" className="w-40 "
                />    </div>
                <div>
                <h1>noreen</h1>
                </div>
               
            
              </div>
              
              <div className="w-40 bg-gray-400 text-center">
                <img
                  src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
            </div>
            <div className="mx-auto w-full flex flex-row gap-8 mt-4">
              <div className="w-40 bg-gray-300 text-center">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-400 text-center">
                <img
                  src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-300 text-center  ">
            <div className="mx-auto w-full flex flex-row gap-8">
              <div className="w-40 bg-gray-300 text-center">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-400 text-center">
                <img
                  src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-300 text-center ">
            <div className="mx-auto w-full flex flex-row gap-8">
              <div className="w-40 bg-gray-300 text-center">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-400 text-center">
                <img
                  src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
              <div className="w-40 bg-gray-500 text-center">
                <img
                  src="https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default ObituariesSec;

import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function FamilyReview() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
    infinite: true, // Loop slides infinitely
    lazyLoad: 'ondemand', // Lazy load images
  };

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900 z-10"
      >
        <IoIosArrowDropleftCircle />
      </button>
      <button
        onClick={next}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900 z-10"
      >
        <IoIosArrowDroprightCircle />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        <div className="bg-gray-300 text-center flex flex-col gap-10 relative">
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
            alt="Mountain Landscape"
            className="w-full h-80 sm:h-96 object-cover"
          />
          <h1 className='absolute top-30   text-white'>Faimly reviews</h1>
          <p className='absolute top-32 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa similique eius nesciunt modi vero blanditiis nemo perspiciatis sed ut impedit voluptates, harum quia asperiores sunt itaque error. Tempore, eos.</p>
        </div>
        <div className="bg-gray-300 text-center flex flex-col gap-10 relative">
          <img
            src="https://media.istockphoto.com/id/1169492344/photo/scenic-view-of-mountains-against-sky.jpg?s=1024x1024&w=0&k=20&c=Giwyyh9dKq7VHTR9QUXYW8quUr18guKnnXeqbOICqKI="
            alt="Scenic Mountains"
            className="w-full h-80 sm:h-96 object-cover"
          />
             <p className='absolute top-32 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa similique eius nesciunt modi vero blanditiis nemo perspiciatis sed ut impedit voluptates, harum quia asperiores sunt itaque error. Tempore, eos.</p>
        </div>
        <div className="bg-gray-300 text-center flex flex-col gap-10 relative ">
          <img
            src="https://media.istockphoto.com/id/503383030/photo/lake-moraine-in-banff-national-park.jpg?s=1024x1024&w=0&k=20&c=0Zsk9vwvRhCOrFs_Cmk3Q1lBNBx_sMLK7zV0ZY-v2UI="
            alt="Lake Moraine"
            className="w-full h-80 sm:h-96 object-cover"
          />
             <p className='absolute top-32 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa similique eius nesciunt modi vero blanditiis nemo perspiciatis sed ut impedit voluptates, harum quia asperiores sunt itaque error. Tempore, eos.</p>

        </div>
      </Slider>
    </div>
  );
}

export default FamilyReview;

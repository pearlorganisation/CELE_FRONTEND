import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../features/actions/reviewsActions";

function FamilyReview() {
  const { reviews } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);

  console.log(reviews, "my family reviews");
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
    lazyLoad: "ondemand", // Lazy load images
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
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <div
              key={review._id}
              className="bg-gray-300 text-center flex flex-col gap-10 relative"
            >
              <img
                src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                alt="Mountain Landscape"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <h1 className="absolute top-30  left-[50%] text-white text-3xl">
                {review.name}
              </h1>
              <p className="absolute bottom-32 left-[30%] text-white">
                {review.review}
              </p>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default FamilyReview;

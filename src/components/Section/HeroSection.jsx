import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import ReviewRating from "./ReviewRating";
import { ImStarHalf } from "react-icons/im";
const data = [
  {
    image:
      "https://t3.ftcdn.net/jpg/06/51/70/96/360_F_651709694_wfXDL2a9956cBB4Q8NYjOhuuNlvdFTxZ.jpg",
    title: "Pre-Planning",
  },
  {
    image:
      "https://media.gettyimages.com/id/1204837391/photo/wreath-of-white-flowers-against-a-stone-wall.jpg?s=612x612&w=0&k=20&c=VEtDXChLOFWnX-plaDUk_ZCPaVOzhARgMWRzRNZPJ5Y=",
    title: "Services We Offer",
    description:
      "Helpful resources to guide you through the loss of a loved one.",
  },
  {
    image:
      "https://media.gettyimages.com/id/186855503/photo/funeral-flower-arrangement-studio-shot.jpg?s=612x612&w=0&k=20&c=qFA0XxH0-x9JPR-so9BQNM8Pd-qqHXOlLYrgrwKPSMk=",
    title: "View Obituaries",
  },
  {
    image:
      "https://media.gettyimages.com/id/157559970/photo/funeral.jpg?s=612x612&w=0&k=20&c=utTMYFfQF7WzbYrgzlDitvxWN6sFtwJv_SySQEos6vI=",
    title: "Send Flowers",
  },
];
function HeroSection() {
  const reviews = [
    {
      date: "06/19/2024",
      text: "Mothe Funeral Homes and staff, we thank you so much for facilitating such a beautiful day for my dad. From planning, to setting up and all the way to the end of service.. everything was so smooth and you were so involved, helpful and kind.",
      author: "Paloma D",
    },
    {
      date: "10/21/2023",
      text: "The service was amazing. The staff was amazing to work with. My mom would have been proud because her makeup and hair were spot on. 😊",
      author: "David LaChute",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="">
      <div className="overflow-hidden ">
        <div className="relative">
          <div
            className="relative w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('/about-us.jpg')" }}
          >
            <div className="absolute  inset-0 left-0 bg-black/5 flex flex-col items-center justify-center text-center text-white px-8">
              <h2 className="text-4xl absolute top-6 text-white font-bold text-left flex self-start uppercase">
                About Us
              </h2>
              <p className="mt-4 text-lg flex self-start text-white absolute top-[78px] capitalize">
                Learn how we have served southern Louisiana since 1895.
              </p>
              <button className="px-6 py-2 relative -top-[25px] bg-transparent border  border-white rounded-full text-white font-medium flex self-start">
                Learn More »
              </button>
            </div>
 <div className="absolute top-10 left-80 ml-20 flex flex-row ">  <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      </div>

            <div className="absolute bg-gray-300   border-black top-3 left-44  border w-40 h-10 rounded-full flex flex-row text-center items-center gap-3 px-2 mt-10">
              <FaStar className="text-2xl text-black" />
              <button className="text-black">Review Us</button>
            </div>


            <div
              className="px-4 py-6 flex  rounded-md max-w-3xl mx-auto  flex-col"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              {/* Review Section */}
              <div className="text-center">
                {/* <div className="flex flex-row mx-auto px-56">
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <ImStarHalf className="text-2xl text-[#ffc400]" size={50} />
        </div> */}
                {/* <p className="text-sm flex px-56 self-start">
          Mothe Funeral Homes, LLC is rated 4.52 out of 5 based on 160 reviews.
        </p> */}

                {/* Review Card */}
                <div
                  className="px-4 py-6 flex bg-[#ffffff] mt-28 rounded-md max-w-3xl mx-auto  flex-col"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-500">
                      {reviews[currentIndex].date}
                    </p>
                    <div className="flex flex-row">
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <FaStar className="text-2xl text-[#ffc400]" size={25} />
                      <ImStarHalf
                        className="text-2xl text-[#ffc400]"
                        size={25}
                      />
                    </div>
                  </div>
                  <p className="text-gray-500">{reviews[currentIndex].text}</p>
                  <p className="mt-2 text-green-800 font-semibold">
                    {reviews[currentIndex].author}
                  </p>
                </div>

       
              </div>
              
            </div>
     

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-28 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg "
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-100 transition duration-300 ease-in-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center">
                    <div className="text-center text-white transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                      <p className="text-lg font-bold">{item.title}</p>
                      {item.description && (
                        <p className="text-sm mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

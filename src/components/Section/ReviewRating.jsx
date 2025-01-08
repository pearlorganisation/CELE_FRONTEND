import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { ImStarHalf } from "react-icons/im";

const data = [
  {
    image: "https://t3.ftcdn.net/jpg/06/51/70/96/360_F_651709694_wfXDL2a9956cBB4Q8NYjOhuuNlvdFTxZ.jpg",
    title: "Pre-Planning",
  },
  {
    image: "https://media.gettyimages.com/id/1204837391/photo/wreath-of-white-flowers-against-a-stone-wall.jpg?s=612x612&w=0&k=20&c=VEtDXChLOFWnX-plaDUk_ZCPaVOzhARgMWRzRNZPJ5Y=",
    title: "Services We Offer",
    description: "Helpful resources to guide you through the loss of a loved one.",
  },
  {
    image: "https://media.gettyimages.com/id/186855503/photo/funeral-flower-arrangement-studio-shot.jpg?s=612x612&w=0&k=20&c=qFA0XxH0-x9JPR-so9BQNM8Pd-qqHXOlLYrgrwKPSMk=",
    title: "View Obituaries",
  },
  {
    image: "https://media.gettyimages.com/id/157559970/photo/funeral.jpg?s=612x612&w=0&k=20&c=utTMYFfQF7WzbYrgzlDitvxWN6sFtwJv_SySQEos6vI=",
    title: "Send Flowers",
  },
];

function ReviewRating() {
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
    <div className="bg-white px-24 text-[#000000] py-10">
      <h1 className="text-green-800 text-4xl">Mothe Funeral Homes, LLC</h1>

      <h2 className="text-green-800 py-10">
        Providing Funeral Services to New Orleans, Harvey & Marrero in LA
      </h2>

      <p>
        Mothe Funeral Homes, LLC was founded in 1895 and has continued to be a leader in death care
        serving Southern Louisiana. The company is expanding its funeral services and cemeteries by
        maintaining the values on which it was built. Mothe Funeral Homes, LLC takes pride in being
        a part of the community and helping families through one of the most difficult times in
        their lives.
      </p>

      <div className="border-4 border-[#313131] w-40 h-14 rounded-full flex flex-row text-center items-center gap-3 px-2 mt-10">
        <FaStar className="text-2xl text-[#313131]" />
        <button>Review Us</button>
      </div>

      {/* Review Section */}
      <div className="text-center">
        <div className="flex flex-row mx-auto px-56">
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <FaStar className="text-2xl text-[#ffc400]" size={50} />
          <ImStarHalf className="text-2xl text-[#ffc400]" size={50} />
        </div>
        <p className="text-sm flex px-56 self-start">
          Mothe Funeral Homes, LLC is rated 4.52 out of 5 based on 160 reviews.
        </p>

        {/* Review Card */}
        <div
          className="px-4 py-6 flex bg-[#ffffff] rounded-md max-w-3xl mx-auto mt-4 flex-col"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-500">{reviews[currentIndex].date}</p>
            <div className="flex flex-row">
              <FaStar className="text-2xl text-[#ffc400]" size={25} />
              <FaStar className="text-2xl text-[#ffc400]" size={25} />
              <FaStar className="text-2xl text-[#ffc400]" size={25} />
              <FaStar className="text-2xl text-[#ffc400]" size={25} />
              <ImStarHalf className="text-2xl text-[#ffc400]" size={25} />
            </div>
          </div>
          <p className="text-gray-500">{reviews[currentIndex].text}</p>
          <p className="mt-2 text-green-800 font-semibold">{reviews[currentIndex].author}</p>
        </div>
      </div>
{/* Grid Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
  {data.map((item, index) => (
    <div key={index} className="relative group overflow-hidden rounded-lg">
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
          {item.description && <p className="text-sm mt-1">{item.description}</p>}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default ReviewRating;

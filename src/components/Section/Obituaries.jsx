import React, { useEffect, useRef, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllObituaries } from "../../features/actions/obituaryActions";

// const obituariesData = [
//   {
//     id: 1,
//     name: "Noreen",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/1f29e807-6f4f-4272-ba68-519f5687c24f",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/2bb5ac3b-311f-4efb-9eaa-048242e6e225",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/9ed19a11-829b-4472-b847-607fbb4f6480",
//   },
//   {
//     id: 4,
//     name: "Robert Brown",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f",
    
//   },


//   {
//     id: 5,
//     name: "Noreen",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/21d1cc05-b136-4f60-a0fe-ea3cc2896168",
//   },
//   {
//     id: 6,
//     name: "John Doe",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/2bb5ac3b-311f-4efb-9eaa-048242e6e225",
//   },
//   {
//     id: 7,
//     name: "Jane Smith",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f",
//   },
//   {
//     id: 8,
//     name: "Robert Brown",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f",
//   },
//   {
//     id: 9,
//     name: "Robert Brown",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f",
//   },
//   {
//     id: 10,
//     name: "Robert Brown",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b6dd06a6-8d04-4507-b772-a5d4f877eab9",
//   },
  
  
//   {
//     id: 11,
//     name: "Robert Brown",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b46cbc55-b56a-4aa2-99f6-04576840c16f",
//   },
 
  
//   {
//     id: 11,
//     name: "Robert Brown",
//     image: "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b6dd06a6-8d04-4507-b772-a5d4f877eab9",
//   },
 
  


  
// ];







function ObituariesSec() {
  const sliderRef = useRef(null);

  const dispatch = useDispatch();
const { obituaries} = useSelector((state) => state.obituaries);
const {paginate} = useSelector((state) => state.obituaries);
console.log(paginate,"pagination")
const[page,setPage]=useState(1)
// console.log("Obituaries State:", obituariesState); 

// const obituaries = obituariesState?.obituaries || [];
console.log(obituaries)
useEffect(() => {
  dispatch(getAllObituaries( page ));
}, [dispatch,page]);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  const handleNext=()=>{
    if(paginate?.next){
      console.log(paginate?.next)
      setPage(paginate?.next)
    }
  }

  const handlePrev=()=>{
    if(paginate?.prev){
setPage(paginate?.prev)
console.log(paginate?.prev)
    }
  }
  return (
    <div className="px-4 py-8 text-white">
      {/* Search Box */}
      <div className="rounded-3xl border border-[#0F4B11] mx-auto w-80 px-4 py-2 flex items-center">
        <span className="text-gray-400">Search here..</span>
        <FaSearch className="ml-auto text-gray-400" size={18} />
      </div>

<div className="bg-black py-8 mt-4">
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">Current Obituaries</h1>
      </div>

      {/* Options */}
      <div className="flex justify-center gap-10 mt-4 text-lg">
        <div>Send Flower</div>
        <div>Obituary Notification</div>
        <div>View All</div>
      </div>

  

      {/* Slider Section */}
      <div className="relative w-full  max-w-5xl mx-auto mt-8 vg-bla">
        {/* Custom Navigation Buttons */}
        <button
          className="absolute -left-28 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-md z-10"
    
          onClick={handlePrev}
          disabled={!paginate?.prev}

        >
          <FaLongArrowAltLeft className="text-white" />
        </button>
        <button
          className="absolute lg:-right-28 top-1/2 transform lg:-translate-y-1/2  px-3 py-2 rounded-md z-10"
          onClick={ handleNext}
          disabled={!paginate?.next}
        >
          <FaLongArrowAltRight className="text-white" />
        </button>

        {/* Slick Slider */}

      
       
            <div className="w-full  ">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-8 justify-center w-full">
                { Array.isArray(obituaries) && obituaries.map((obituary) => (
                  <div key={obituary._id} className="text-center ">
                    <img src={obituary.image?.secure_url} alt={obituary.name} className="w-56 mx-auto h-40" />
                    <h1 className="mt-2 text-white">{obituary.name}</h1>
                  </div>
                ))}
              </div>
            </div>
   
       
      </div>
      <div className="flex justify-center">
      <span className="text-lg">{`Page ${page} of ${paginate?.pages?.length || 1}`}</span>
      </div>


    </div></div>
  );
}

export default ObituariesSec;

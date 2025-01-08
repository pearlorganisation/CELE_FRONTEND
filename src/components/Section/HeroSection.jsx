import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {

  

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    };
  return (
    <section >
    


    <Slider {...settings}>
      <div className='overflow-hidden '>
        <div className='relative '>
          <img src="https://static.vecteezy.com/system/resources/previews/033/919/308/non_2x/the-sun-rises-over-the-mountains-and-flowers-in-the-foreground-ai-generated-free-photo.jpg" alt=""  className='w-full h-96 object-cover'/>
      <div className='absolute inset-0 bg-black opacity-40  flex flex-col items-center  justify-center text-center text-white'>
        <h2 className='text-4xl'>About Us  </h2>
        <p className="mt-4 text-lg">Learn how we have served southern Louisiana since 1895.</p>
        <button className="mt-6 px-6 py-2 bg-green-700 hover:bg-green-600 rounded-md text-white font-medium">
          Learn More »
        </button>   
      </div></div>
      </div>
      <div>
      <div>
        <div className='relative  overflow-hidden '>
          <img src="https://images.unsplash.com/photo-1612464555220-63f8611fb765?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-full h-96 object-cover'/>
      <div className='absolute inset-0 bg-black opacity-40  flex flex-col items-center  overflow-hidden  justify-center text-center text-white'>
        <h2 className='text-4xl font-'>About Us  </h2>
        <p className="mt-4 text-lg">Learn how we have served southern Louisiana since 1895.</p>
        <button className="mt-6 px-6 py-2 bg-green-700 hover:bg-green-600 rounded-md text-white font-medium">
          Learn More »
        </button>
      </div></div>
      </div>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    </section>
    
  )
}

export default HeroSection

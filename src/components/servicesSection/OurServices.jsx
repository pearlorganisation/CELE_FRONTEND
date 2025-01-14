import React from 'react';
import HeaderComp from './Headercomp';

const OurServices = () => {
  return (
    <div className=" ">
      {/* Section Header */}
      <div className="relative">
        <img src="https://img.freepik.com/premium-photo/railway-spring-forest-tunnel-love_93200-3986.jpg?w=900" alt=""  className="w-full h-[500px]"/>
        <div className="absolute top-40  text-white text-center w-full text-7xl font-bold">
        <div>Services Overview</div>
      </div>

      </div>
      <div className="text-center mb-8 px-4 py-10">
        <h1 className="text-4xl font-bold text-green-800">Services We Provide</h1>
        <p className="text-gray-600 mt-2">
          Mothe Funeral Homes, LLC offers distinctive, personal, and affordable services designed to help you honor your loved one in a way that is unique to them and meaningful to you.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {/* Card 1: Funerals & Memorials */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="https://everloved.com/static/img/business_defaults/cemetery-default-9.01a58c563a7c.jpg"
              alt="Funerals & Memorials"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-lg font-semibold">Funerals & Memorials</h2>
          </div>
        </div>

        {/* Card 2: Personalized Services */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/White-Dove-for-Dove-Releases-a-Personal-Service-offered-at-Mothe-Funeral-Home-LLC-1920w.jpg"
              alt="Personalized Services"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-lg font-semibold">Personalized Services</h2>
          </div>
        </div>
    

        {/* Card 3: Cremation Services */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Cremation+Services+at+Mothe+Funeral+Home+in+Louisiana+1920-1920w.jpg"
              alt="Cremation Services"
              className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-lg font-semibold">Cremation Services</h2>
          </div>
        </div>
        </div>
        <div className='px-4 py-10'>
        <HeaderComp/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Cremation+Services+at+Mothe+Funeral+Home+in+Louisiana+1920-1920w.jpg"
              alt="Cremation Services"
              className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-lg font-semibold">Cremation Services</h2>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Cremation+Services+at+Mothe+Funeral+Home+in+Louisiana+1920-1920w.jpg"
              alt="Cremation Services"
              className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-lg font-semibold">Cremation Services</h2>
          </div>
          
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Cremation+Services+at+Mothe+Funeral+Home+in+Louisiana+1920-1920w.jpg"
              alt="Cremation Services"
              className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-lg font-semibold">Cremation Services</h2>
          </div>
        </div>
     </div>
    </div>
  );
};

export default OurServices;

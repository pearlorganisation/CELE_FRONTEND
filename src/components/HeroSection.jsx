/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const HeroSection = ({ title, image, subtitle }) => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

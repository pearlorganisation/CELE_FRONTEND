import React, { useState } from "react";
import CemeteryEtiquette from "../resources/CemeteryEtiquette.jsx";
import DeathCertificates from "../resources/DeathCertificate.jsx";
import SocialSecurityBenefits from "../resources/socialSecurity.jsx";
import WhenDeathOccurs from "../resources/WhenDeathOccurs.jsx";
import FAQ from "../resources/Faq.jsx"
import FuneralEtiquette from "./Funeralatiqutte.jsx";

const FuneralBenefits = () => {
  const [activeTab, setActiveTab] = useState("Social Security");  
  const [activeTabIndex, setActiveTabIndex] = useState(0); 

  const renderTabContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <>
            <SocialSecurityBenefits />
       
          
      

          </>
        );
      case 1:
        return <div><WhenDeathOccurs/></div>;  
      case 2:
        return <div><DeathCertificates /></div>;  
      case 3:
        return <div><FuneralEtiquette/></div>;  
      case 4:
        return <div>  <FAQ /></div>;  
      case 5:
        return <div><CemeteryEtiquette /></div>;  
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div>
      <div className="relative">
        {/* Image */}
        <img
          src="https://cdn.pixabay.com/photo/2018/05/02/23/00/forest-3369950_1280.jpg"
          alt=""
          className="w-full h-[600px]"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="absolute top-44 text-white text-center w-full text-7xl font-bold">
          <div>{activeTab}</div>
        </div>
      </div>
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300 bg-[#0F4B11] text-white px-20 py-3">
          <button
            className={`px-4 py-2 ${activeTab === "Social Security" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white" : ""} uppercase`}
            onClick={() => {
              setActiveTab("Social Security");
              setActiveTabIndex(0);
            }}
          >
            Social Security Benefits
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "Death Occurs" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]" : ""} uppercase`}
            onClick={() => {
              setActiveTab("When Death Occurs");
              setActiveTabIndex(1);
            }}
          >
            When Death Occurs
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "deathCertificate" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]" : ""} uppercase`}
            onClick={() => {
              setActiveTab("Death Certificates");
              setActiveTabIndex(2);
            }}
          >
            Death Certificates
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "funeralEtiquette" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]" : ""} uppercase`}
            onClick={() => {
              setActiveTab("Funeral Etiquette");
              setActiveTabIndex(3);
            }}
          >
            Funeral Etiquette
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "faQ" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]" : ""} uppercase`}
            onClick={() => {
              setActiveTab("FAQ");
              setActiveTabIndex(4);
            }}
          >
            FAQ
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "cemeteryEtiquette" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]" : ""} uppercase`}
            onClick={() => {
              setActiveTab("Cemetery Etiquette");
              setActiveTabIndex(5);
            }}
          >
            Cemetery Etiquette
          </button>
        </div>
      </div>
      <div className="px-20 py-10">{renderTabContent()}</div>
    </div>
  );
};

export default FuneralBenefits;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonalServices from "./PersonalServices.jsx";
import Cremation from "./Cremation.jsx";
import HonoringLife from "./HonoringLife.jsx";
import Veterans from "./Veterans.jsx";
import FuneralMemorial from "./Funeral&Memorial.jsx";
import { TfiUppercase } from "react-icons/tfi";
import CemeteryProperty from "./Cemetery.jsx";

function Funeral() {
  const [activeTab, setActiveTab] = useState("Funeral Memorial");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const renderTabContent = () => {
    switch (activeTabIndex) {
      case 0:
        return <FuneralMemorial />;
      case 1:
        return <PersonalServices />;
      case 2:
        return <Cremation />;
        case 3:
            return <CemeteryProperty/>
      case 4:
        return <HonoringLife />;
      case 5:
        return <Veterans />;
      default:
        return <div>Invalid Tab</div>;
    }
  };

  return (
    <div className="h-full ">
      {/* Header */}
      <div className="relative">
        <img src="https://img.freepik.com/premium-photo/railway-spring-forest-tunnel-love_93200-3986.jpg?w=900" alt=""  className="w-full h-[500px]"/>
        <div className="absolute top-40  text-white text-center w-full text-7xl font-bold">
        <div>{activeTab}</div>
      </div>

      </div>

      {/* Tab Navigation */}
      <div className="w-full">
        <div className="bg-[#0F4B11]  text-white">
          {/* Redirecting Tab */}
    <Link to="/ourServices"   >
    <button className={`px-4 py-2 ${
        activeTab==="Our Services"?"border-b-2 border-green-600 font-semibold bg-[#0c3b0e]":""
    }uppercase  text-white`} onClick={()=>{setActiveTab("our services")
        setActiveTabIndex(0);
    }}>
Our Services
    </button>

    </Link>   

          {/* Other Tabs */}
          <button
            className={`px-4 py-2 ${
              activeTab === "Funeral Memorial"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            } uppercase`}
            onClick={() => {
              setActiveTab("Funeral Memorial");
              setActiveTabIndex(0);
            }}
          >
            Funeral Memorial
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Personal Services"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            } uppercase`}
            onClick={() => {
              setActiveTab("Personal Services");
              setActiveTabIndex(1);
            }}
          >
            Personal Services
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Cremation"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            } uppercase`}
            onClick={() => {
              setActiveTab("Cremation");
              setActiveTabIndex(2);
            }}
          >
            Cremation
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Cemetery Property"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            } uppercase`}
            onClick={() => {
              setActiveTab("Cemetery Property");
              setActiveTabIndex(3);
            }}
          >Cemetery Property
           </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Honoring Life"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            } uppercase`}
            onClick={() => {
              setActiveTab("Honoring Life");
              setActiveTabIndex(4);
            }}
          >
            Honoring Life
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Veterans"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            } uppercase`}
            onClick={() => {
              setActiveTab("Veterans");
              setActiveTabIndex(5);
            }}
          >
            Veterans
          </button>
        </div>

        {/* Tab Content */}
        <div className="px-20 py-10">{renderTabContent()}</div>
      </div>
    </div>
  );
}

export default Funeral;

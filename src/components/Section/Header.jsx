import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdown = (dropdown) => {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
  
    return (
      <div className="relative w-full  bg-cover bg-center z-50">
        <header className="bg-white shadow px-4 py-4 " >
          <div className="container mx-auto px-10 py-8 flex items-center justify-between  ">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <img src="logo.png" alt="logo" className="w-10 h-10" />
              <h1 className="text-xl font-bold text-green-800">
                Mothe Funeral Homes, LLC
              </h1>
            </div>
            {/* Navigation */}
            <nav className="space-x-8 text-sm font-medium text-gray-600 flex items-center">
              {/* Obituaries Dropdown */}
              <div className="relative group inline-block">
                <button
                  className="flex items-center space-x-1 hover:text-green-800"
                  onClick={() => handleDropdown(" CelebrateLife")}
                >
                  <span> CelebrateLife</span>
                  {activeDropdown === " CelebrateLife" ? (
                    <RiArrowDropUpLine className="h-5 w-5" />
                  ) : (
                    <RiArrowDropDownLine className="h-5 w-5" />
                  )}
                </button>
                {activeDropdown === " CelebrateLife" && (
                  <ul className="absolute bg-white border  border-gray-300 shadow-lg rounded-md mt-2 w-48 ">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        CelebrateLife
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Obituary Notification
                      </a>
                    </li>
                  </ul>
                )}
              </div>
  
              {/* Our Services Dropdown */}
              <div className="relative group inline-block">
                <button
                  className="flex items-center space-x-1 hover:text-green-800"
                  onClick={() => handleDropdown("ourServices")}
                >
                  <span>Our Services</span>
                  {activeDropdown === "ourServices" ? (
                    <RiArrowDropUpLine className="h-5 w-5" />
                  ) : (
                    <RiArrowDropDownLine className="h-5 w-5" />
                  )}
                </button>
                {activeDropdown === "ourServices" && (
                  <ul className="absolute bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-56">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Funerals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Personalized Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Cremation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Cemetery Property
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        When Death Occurs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Honoring Life
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Veterans
                      </a>
                    </li>
                  </ul>
                )}
              </div>
  
        
              <div className="hover:text-green-800">
                <a href="#" className="text-gray-600">
                Memorials
                </a>
              </div>
                    {/* Pre-Plan Now */}
              <div className="hover:text-green-800">
                <a href="#" className="text-gray-600">
                Pre-Plan Now
                </a>
              </div>
  
              {/* Grief Dropdown */}
              <div className="relative group inline-block">
                <button
                  className="flex items-center space-x-1 hover:text-green-800"
                  onClick={() => handleDropdown("Preplan Now Grief")}
                >
                  <span> Grief</span>
                  {activeDropdown === "Preplan Now Grief" ? (
                    <RiArrowDropUpLine className="h-5 w-5" />
                  ) : (
                    <RiArrowDropDownLine className="h-5 w-5" />
                  )}
                </button>
                {activeDropdown === "Preplan Now Grief" && (
                  <ul className="absolute bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-36">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Grief Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Grieving Process
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Grief Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                      >
                        Local Grief Support
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              <div className="hover:text-green-800">
                <a href="#" className="text-gray-600">
                Resources
                </a>
              </div>
              <button className="px-4 py-2 text-white bg-green-800 hover:bg-green-700 rounded-md">
            IMMEDIATE HELP
          </button>
            </nav>
          </div>
        </header>
      </div>
    );
  };
  
  

export default Header

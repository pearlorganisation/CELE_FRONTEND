import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/slices/authSlice";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { getAllServices } from "../../features/actions/servicesAction";
export default function Header() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const navigation = [
    // { title: "Home", path: "/" },
    // { title: "AI Eulogy", path: "/Eulogy-ai" },
    // { title: "Memorials", path: "/memorials" },
    // { title: "Obituaries", path: "/obituaries" },
    // // { title: "Pricing", path: "/pricing" },
    // { title: "Services", path: "/services" },
    // { title: "Market PLace", path: "/marketplace" },
     

  ];
    
const contactInfo=[
  {title:"Nairobi:",path:"0722123015"},
  {title:"Kisumu:",path:"0721955616"},
  {title:"ELDORET:",path:"0722123015"}
]
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const { services } = useSelector((state) => state.services);
  console.log("serve", services);
  useEffect(() => {
    dispatch(getAllServices({ page: 1 }));
  }, []);

  const [activeDropdown, setActiveDropdown] = useState();
  const dropdownRef = useRef();
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef}>
        <nav className="bg-green-900 w-full border-b md:border-0 md:static  z-50">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-4 md:py-6">
            <div className="flex items-center justify-between py-3 md:py-2 md:block">
              {/* <Link to="/">
              <div className="flex flex-row gap-3 justify-center items-center">
                <img
                  src="https://www.celebratelife.co.ke/assets/images/logo/logo-white-two.png"
                  className="w-12 h-12"
                />
                <h1 className="text-white"> CELE </h1>
              </div>
            </Link> */}
              <div className="md:hidden">
                <button
                  className="text-gray-700 outline-none p-2 rounded-md focus:border-white border-2 font-bold border-white focus:border"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="white"
                      stroke="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul
                className="justify-end items-end space-y-8 md:flex md:space-x-6 md:space-y-0"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-white font-bold text-xl
                  hover:text-[#bfc1c2] border-b-transparent  duration-150"
                    >
                      <Link to={item.path} className="">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}

<div className="text-white font-bold text-xl hover:text-[#bfc1c2] border-b-transparent duration-150 flex flex-col">
  <ul className="flex flex-row  gap-4">
    {contactInfo?.map((contact, index) => (
      <li key={index} className="flex flex-row space-x-2"> {/* Add space-x-2 to space items */}
        <button className="uppercase" onClick={() => window.location.href = `tel:${contact.path}`}>
          {contact.title} {contact.path}
        </button>
      </li>
    ))}
  </ul>
</div>

              </ul>
            </div>
{/* 
            <div className="flex flex-row justify-between ml-8 font-medium">
              <div className="hidden md:inline-block " data-aos="fade-left">
                <div className="flex flex-row gap-4   items-center justify-center">
                  {!isUserLoggedIn ? (
                    <>
                      <div>
                        <Link
                          to="/login"
                          data-aos="zoom-out"
                          data-aos-delay="800"
                          className="hover:text-[rgb(222,226,226)]  text-xl border-b-2 font-bold text-white border-b-transparent hover:border-b-[#007E8F] duration-150 mr-2"
                        >
                          <sapn className="font-medium">Login</sapn>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/signup"
                          className="hover:text-[#d6dbdb] font-bold border-b-2 text-xl text-white border-b-transparent hover:border-b-[#007E8F] duration-150"
                        >
                          Sign Up
                        </Link>
                      </div>{" "}
                    </>
                  ) : (
                    <ProfileMenu />
                  )}
                </div>
              </div>
            </div> */}
          </div>
        </nav>

        <div className="relative w-full  bg-cover bg-center  z-50">
          <header className="bg-[#ffffff] shadow px-2 py-2 ">
            <div className="container mx-auto px-1 py-4 flex flex-col md:flex-row md:items-center md:justify-between  ">
              {/* Logo Section */}
              <div>
                {" "}
                <Link to="/">
                  <div className="flex flex-row gap-3 justify-center items-center">
                    <img
                      src="https://www.celebratelife.co.ke/assets/images/logo/logo-white-two.png"
                      className="w-12 h-12"
                    />
                 <h1 className="text-green-900 font-bold text-2xl md:mr-[69px]">
  Celebrate<span className="text-red-600">Life</span>
</h1>

                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="space-x-2 lg:text-[18px] md:text-[16px] text-red-600 flex  flex-col md:flex-row  gap-4 items-center font-bold">
                {/* Obituaries Dropdown */}
                <div className="relative group inline-block">
                  <button
                    className="flex items-center space-x-1 hover:text-green-800"
                    onClick={() =>handleDropdown("CelebrateLife")}
                  >
                    <span className=""> CelebrateLife</span>
                    {/* {activeDropdown === " CelebrateLife" ? (
                    <RiArrowDropUpLine className="h-5 w-5" />
                  ) : (
                    <RiArrowDropDownLine className="h-5 w-5" />
                  )} */}
                  </button>
                  {activeDropdown === "CelebrateLife" && (
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
                          href="/notification"
                          className="block px-4 py-2 hover:bg-green-100 text-gray-800"
                        >
                          Obituary Notification
                        </a>
                      </li>
                    </ul>
                  )}
                </div>

                <div className="relative group inline-block">
                  <button
                    className="flex items-center space-x-1 hover:text-green-800 "
                    onClick={() => handleDropdown("ourServices")}
                  >
                    <span>Our Services</span>
                    {/* {activeDropdown === "ourServices" ? (
      <RiArrowDropUpLine className="h-5 w-5" />
    ) : (
      <RiArrowDropDownLine className="h-5 w-5" />
    )} */}
                  </button>

                  {/* Dropdown Content */}
                  {activeDropdown === "ourServices" && (
                    <ul className="absolute bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-56 z-10">
                      {Array.isArray(services) && services.length > 0 ? (
                        services.map((service) => (
                          <div
                            key={service._id}
                            onClick={() =>
                              navigate(`/services/${service?._id}`)
                            }
                          >
                            {service.name}
                          </div>
                        ))
                      ) : (
                        <li className="text-gray-500 px-4 py-2">
                          No services available
                        </li>
                      )}
                    </ul>
                  )}
                </div>

                {/* Pre-Plan Now */}

                <div className="hover:text-green-800">
                  <a href="#" className="text-red-600">
                    Pre-plan Now
                  </a>
                </div>
                {/* Grief Dropdown */}
                <div className="relative group inline-block">
                  <button
                    className="flex items-center space-x-1 hover:text-green-800"
                    onClick={() => handleDropdown(" Grief")}
                  >
                    <span> Grief</span>
                    {/* {activeDropdown === " Grief" ? (
                <RiArrowDropUpLine size={20} className="font-bold" />

                  ) : (
                    <RiArrowDropDownLine size={20} className="font-bold" />

                  )} */}
                  </button>
                  {activeDropdown === " Grief" && (
                    <ul className="absolute bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-56 z-10 overflow-auto max-h-[300px]">
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
                <div>
                  <div className="relative group inline-block">
                    <button
                      className="hover:text-green-800 flex items-center space-x-1 "
                      onClick={() => handleDropdown("Resources")}
                    >
                      <span>Resources</span>
                      {/* {activeDropdown === "Resources" ? (
                      <RiArrowDropUpLine className="h-5 w-5" />
                    ) : (
                      <RiArrowDropDownLine className="h-5 w-5" />
                    )} */}
                    </button>
                    {activeDropdown === "Resources" && (
                      <>
                        <ul className="absolute bg-white border border-gray-300 shadow-lg rounded-md mt-2 w-56 flex flex-col  text-center gap-1 py-2">
                          <li>
                            <a
                              href="#"
                              className=" px-4 py-2 hover:bg-green-100 text-gray-800"
                            >
                              Social Security Benefits
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className=" px-4 py-2 hover:bg-green-100 text-gray-800"
                            >
                              Funeral Etiquette
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className=" px-4 py-2 hover:bg-green-100 text-gray-800"
                            >
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className=" px-4 py-2 hover:bg-green-100 text-gray-800"
                            >
                              Cemetery Etiquette
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className=" px-4 py-2 hover:bg-green-100 text-gray-800"
                            >
                              Order More Death Certificates
                            </a>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>




                </div>

                <div className="hover:text-green-800">
                  <a href="/about_us" className="text-red-600">
                 About Us
                  </a>
                </div>
                <button className="px-2 pb-2 text-red-600 font-xl bg-gray-300 border border-black hover:bg-green-700 ">
                  IMMEDIATE HELP
                </button>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

"useclient"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/slices/authSlice";
import { getAllServices } from "../../features/actions/servicesAction";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Menu, X } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const { services } = useSelector((state) => state.services);

  const contactInfo = [

    {navtitle:"Home",path:"/"},
    {navtitle:"AI Eulogy",path:"/eulogy-ai"},
    {navtitle:"Memorials",path:"/memorials"},
    // {navtitle:"Obituries",path:"/obituaries"},
    {navtitle:"Pricing",path:"/pricing"},
    // {navtitle:"Services",path:"/services"},
    {navtitle:"Market Place",path:"/marketplace"},
    { navtitle: "About us", path: "/about_us" },
    {navtitle:"Contact us",path:"/contact-us"},
    // { title: "NAIROBI", phone: "0722123015" },
    // { title: "KISUMU", phone: "0721955616" },
    // { title: "ELDORET", phone: "0722123015" },
  

  ];

  const navigation = [
    {
      title: "CelebrateLife",
      items: [
        { name: "CelebrateLife", path: "#" },
        { name: "Obituary Notification", path: "/notification" },
      ],
    },
    {
      title: "Our Services",
      items: services && Array.isArray(services) ? services : [],
    },
    { title: "Pre-plan Now", path: "#" },
    {
      title: "Grief",
      items: [
        { name: "Grief Support", path: "#" },
        { name: "Grieving Process", path: "#" },
        { name: "Grief Resources", path: "#" },
        { name: "Local Grief Support", path: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Social Security Benefits", path: "#" },
        { name: "Funeral Etiquette", path: "#" },
        { name: "FAQ", path: "#" },
        { name: "Cemetery Etiquette", path: "#" },
        { name: "Order More Death Certificates", path: "#" },
      ],
    },
 
  ];

  useEffect(() => {
    dispatch(getAllServices({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {/* Green Top Contact Bar */}
        <div className="hidden md:flex md:bg-[#055611] text-white py-6 px-4">
  <div className="container mx-auto flex flex-row items-center gap-4 text-xl">
    {/* Centered Navigation Items */}
    <div className="flex-1 flex justify-end gap-4 mr-20">
      {contactInfo.map((contact, index) => (
        <div key={index} className="flex items-center gap-2 text-xl">
          <a href={`tel:${contact.phone}`} className="hover:text-green-200">
            {contact.title} {contact.phone}
          </a>
          <Link to={contact?.path}>
            <span className="hover:text-green-200 ">{contact.navtitle}</span>
          </Link>
        </div>
      ))}
    </div>

    {/* Login & Signup Buttons aligned at the End */}
    <div className="flex gap-4 ml-3 text-xl">
      <Link className="hover:text-green-200">Login</Link>
      <Link className="hover:text-green-200">Signup</Link>
    </div>
  </div>
</div>


        {/* Main Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className=" hidden md:flex items-center justify-between py-4 ">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="https://www.celebratelife.co.ke/assets/images/logo/logo-white-two.png"
                  alt="CelebrateLife Logo"
                  className="w-12 h-12"
                />
                <h1 className="text-green-900 font-bold text-2xl">
                  Celebrate<span className="text-red-600">Life</span>
                </h1>
              </Link>

              {/* Mobile Menu Button */}
              {/* <button
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button> */}

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                {navigation.map((item, index) => (
                  <div key={index} className="relative">
                    {item.items ? (
                      <button
                        className="text-red-600 font-bold flex items-center gap-1"
                        onClick={() => handleDropdown(item.title)}
                      >
                      <div className="font-bold">{item.title}
                        </div>  
                        {activeDropdown === item.title ? (
                          <RiArrowDropUpLine className="h-6 w-6" />
                        ) : (
                          <RiArrowDropDownLine className="h-6 w-6" />
                        )}
                      </button>
                    ) : (
                      <Link to={item.path} className="text-red-600 font-bold">
                        {item.title}
                      </Link>
                    )}

                    {activeDropdown === item.title && item.items && (
                      <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={
                              item.title === "Our Services"
                                ? `/services/${subItem._id}`
                                : subItem.path
                            }
                            className="block px-4 py-2 text-gray-800 hover:bg-green-50"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="bg-gray-300 text-red-600  border border-black text-medium font-bold px-4 pb-2 ">
                  IMMEDIATE HELP
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
      
        <div className="md:hidden ">
      {/* Menu Button */}
      <button
        className=" text-2xl p-3 px-2 py-8 fixed top-4 right-4 z-50 cursor-pointer  rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes  className=" text-white bg-[#055611]"/> : <FaBars 
  fontSize={30} 
  className="text-black bg-white p-2 rounded-md shadow-md cursor-pointer h-10 w-full"
/>
}
      </button>

      {/* Mobile Navigation Panel */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-white z-40  transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="bg-[#055611] text-white py-6 px-8">
          <div className="flex flex-col items-left gap-4 text-lg">
            {/* Contact Info */}
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                <a href={`tel:${contact.phone}`} className="hover:text-green-200">
                  {contact.title} {contact.phone}
                </a>
                <Link to={contact?.path} className="hover:text-green-200 capitalize">
                  {contact.navtitle}
                </Link>
              </div>
            ))}

            {/* Login & Signup */}
            <div className="flex gap-4 text-lg">
              <Link className="hover:text-green-200">Login</Link>
              <Link className="hover:text-green-200">Signup</Link>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
     
        <div className="flex flex-col bg-[#055611] gap-4 px-8 py-10">
          {navigation.map((item, index) => (
            <div key={index}>
              {item.items ? (
                <div>
                  <button
                    className="text-white   font-bold w-full text-center flex items-center mx-auto py-2"
                    onClick={() => handleDropdown(item.title)}
                  >
                    {item.title}
                    {activeDropdown === item.title ? (
                      <RiArrowDropUpLine className="h-6 w-6" />
                    ) : (
                      <RiArrowDropDownLine className="h-6 w-6" />
                    )}
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4 py-2 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={
                            item.title === "Our Services"
                              ? `/services/${subItem._id}`
                              : subItem.path
                          }
                          className="block  text-white  "                      >
                       <span classname="py-4">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.path} className="text-white  font-bold block py-2">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
      </div>
    </>
  );
}

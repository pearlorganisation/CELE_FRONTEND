"useclient"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/slices/authSlice";
import { getAllServices } from "../../features/actions/servicesAction";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const { services } = useSelector((state) => state.services);

  const contactInfo = [
    { title: "NAIROBI", phone: "0722123015" },
    { title: "KISUMU", phone: "0721955616" },
    { title: "ELDORET", phone: "0722123015" },
  {title:"obituries"}
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
    { title: "About Us", path: "/about_us" },
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
        <div className="bg-green-900 text-white py-6 px-4">
          <div className="container mx-auto flex justify-center md:justify-end gap-4 text-sm">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={`tel:${contact.phone}`}
                className="hover:text-green-200 uppercase"
              >
                {contact.title}: {contact.phone}
              </a>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4 ">
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
              <button
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

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
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  IMMEDIATE HELP
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden pb-4 border-t border-gray-200 mt-4`}
        >
          <div className="flex flex-col gap-4 px-4">
            {navigation.map((item, index) => (
              <div key={index}>
                {item.items ? (
                  <div>
                    <button
                      className="text-red-600 hover:text-green-800 font-bold w-full text-left flex items-center justify-between py-2"
                      onClick={() => handleDropdown(item.title)}
                    >
                      {item.title}
                      {activeDropdown === item.title ? (
                        <RiArrowDropUpLine className="h-5 w-5" />
                      ) : (
                        <RiArrowDropDownLine className="h-5 w-5" />
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
                            className="block py-1 text-gray-800 hover:text-green-800"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.path} className="text-red-600 hover:text-green-800 font-bold block py-2">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

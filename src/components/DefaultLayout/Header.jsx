import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/slices/authSlice";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

export default function Header() {
  const [state, setState] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "AI Eulogy", path: "/ai_eulogy" },
    { title: "Memorials", path: "/memorials" },
    { title: "Obituaries", path: "/obituaries" },
    { title: "Pricing", path: "/pricing" },
    { title: "Services", path: "/services" },
    { title: "Market PLace", path: "/marketplace" },
    { title: "About Us", path: "/about_us" },
    { title: "Contact Us", path: "/contact" },
  ];

  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-purple-500  w-full border-b md:border-0 md:static  z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <div className="flex flex-row gap-3 justify-center items-center">
              <img
                src="https://www.celebratelife.co.ke/assets/images/logo/logo-white-two.png"
                className="w-12 h-12"
              />
              <h1 className="text-white"> CELE </h1>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-white border-2 border-white focus:border"
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
            className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white text-sm 
                  hover:text-[#007E8F] border-b-transparent  duration-150"
                >
                  <Link to={item.path} className="">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-row justify-between">
          {/* <div className="hidden md:inline-block mr-20">
            <form className="">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  style={{
                    backgroundColor:
                      "linear-gradient(90deg, rgba(255,255,255,0.1) 10%, rgba(255,255,255,1) 40%)",
                  }}
                  className="block lg:min-w-72 p-1 text-sm border border-[#DDE2E4] text-gray-900 bg-gradient-to-b from-gray-950 to-gray-600  rounded-md "
                  placeholder=""
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
                >
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div> */}

          <div className="hidden md:inline-block " data-aos="fade-left">
            <div className="flexflex-row gap-6 items-center justify-center">
              {!isUserLoggedIn ? (
                <div>
                  <Link
                    to="/login"
                    data-aos="zoom-out"
                    data-aos-delay="800"
                    className="hover:text-[#007E8F] border-b-2 text-white border-b-transparent hover:border-b-[#007E8F] duration-150 mr-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="hover:text-[#007E8F] border-b-2 text-white border-b-transparent hover:border-b-[#007E8F] duration-150"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <ProfileMenu />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

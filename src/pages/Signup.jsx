import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { registerUser } from "../features/actions/authActions";
const Signup = () => {
  const { loading, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submitForm = async (info) => {
    dispatch(registerUser(info));
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mx-auto flex flex-col justify-center items-center">
            <img
              src="https://www.celebratelife.co.ke/assets/images/logo/logo-white-two.png"
              className="w-40 h-40"
            />

            <h1 className="text-2xl">CELEBRATE LIFE </h1>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit(submitForm)}>
                {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                    required
                    {...register("name")}
                  />

                  <input
                    className="w-full px-8 py-4 mt-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                    {...register("email")}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    required
                    placeholder="Password"
                    {...register("password")}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading ? (
                      <ClipLoader />
                    ) : (
                      <span className="">Register</span>
                    )}
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Celebrate Life
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted ml-2 mr-2"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted ml-2 mr-2"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1  text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-cover bg-center bg-no-repeat rounded-lg"
            style={{
              background:
                "url('https://media.istockphoto.com/id/1279757036/vector/funeral-vector-card-with-calla-flowers-sorrowful.jpg?s=612x612&w=0&k=20&c=3ilN8PCp7dWqLpjcsZz2800H3likorYy0FPuUZ_ucWw=')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

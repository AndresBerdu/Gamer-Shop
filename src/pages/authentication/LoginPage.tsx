import { Link } from "react-router";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import setUpGamer from "../../assets/images/authentication/setup-gamer.webp";

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="flex bg-white w-250 p-2 shadow-2xl my-5">
          <div className="w-[50%]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={setUpGamer}
              alt=""
            />
          </div>
          <div className="w-[50%] py-10 px-20">
            <h1 className="capitalize text-[#200d30] text-4xl">
              get started now
            </h1>
            <h2 className="first-letter:uppercase text-gray-500 mt-2">
              please, log in to your account for continue
            </h2>
            <div className="flex flex-col mt-7">
              <label className="capitalize text-[#200d30] font-medium mb-1">
                email address
              </label>
              <input
                className="py-1 px-3 border border-[#df19df] focus:border-[#200d30] outline-none rounded-lg"
                placeholder="Enter your email..."
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="capitalize text-[#200d30] font-medium mb-1">
                password
              </label>
              <input
                className="py-1 px-3 border border-[#df19df] focus:border-[#200d30] outline-none rounded-lg"
                placeholder="Enter your password..."
                type="password"
                name=""
                id=""
              />
            </div>
            <Link
              to="/"
              className="capitalize block text-[#df19df] font-medium text-end mt-4 text-5"
            >
              forgot your password?
            </Link>
            <div className="mt-4">
              <input
                className="mr-2 accent-[#200d30]"
                type="checkbox"
                name=""
                id=""
              />
              <span className="capitalize">i agree to terms and privacity</span>
            </div>
            <button className="capitalize bg-[#3bff29] text-white font-bold w-full rounded-lg py-1 cursor-pointer hover:bg-[#17a2ff] ease-in transition mt-4">
              log in
            </button>
            <div className="text-center block mt-4">
              <span className="text-gray-500 mr-2">Don't you have account?</span>
              <Link className="capitalize font-medium text-[#df19df]" to="/register">
                resgister now!
              </Link>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="w-full h-0.5 bg-[#200d30]"></div>
              <span className="mx-2">or</span>
              <div className="w-full h-0.5 bg-[#200d30]"></div>
            </div>
            <button className="flex cursor-pointer items-center justify-center w-full outline outline-[#200d30] rounded-lg py-1 mt-4">
              <FcGoogle className="mr-2" />
              <span className="capitalize font-medium text-[#200d30]">
                google
              </span>
            </button>
            <button className="flex cursor-pointer items-center justify-center w-full outline outline-[#200d30] rounded-lg py-1 mt-3">
              <FaFacebook className="mr-2 text-[#4267B2]" />
              <span className="capitalize font-medium text-[#200d30]">
                facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

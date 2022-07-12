import React from "react";
import Input from "./Input";
import LOGO from "../assets/logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="w-full max-w-lg">
        <div className="sm:rounded-xl sm:shadow-md sm:border border-opacity-50 sm:bg-white px-4 sm:px-8 py-12 flex flex-col items-center">
          <div className="h-14">
            <img src={LOGO} alt="logo" className="w-full h-full" />
          </div>
          <form className="w-full">
            <div className="mt-12 w-full  flex  flex-col  items-center space-y-6">
              <Input type="email" label="Email Address" required />
              <Input type="password" label="Password" required />
              <p className="sm">Forgot Password</p>
            </div>
          </form>
          <button
            type="submit"
            className="mt-6 w-full font-medium inline-flex justify-center items-center rounded-md p-3 text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed  disabled:hover:bg-purple-600 disabled:hover:border-bg-600 transition-colors"
          >
            SignIn
          </button>
        </div>
        <p className="sm:mt-8  text-black  text-center">
          Already have account
          <Link
            to="/signUpPage"
            className="text-purple-500 hover:underline hover:underline-offset-1 transition mx-2"
          >
            SignUp
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;

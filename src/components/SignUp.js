import React from "react";
import {Link}  from "react-router-dom";
import LOGO from "../assets/logo.png"
import Input from "./Input";

const SignUp = () => {
  return (
    <>
    <div className="w-full max-w-lg">
      <div className="sm:rounded-xl sm:shadow-md sm:border border-opacity-50 sm:bg-white px-4 sm:px-8 py-12 flex flex-col items-center">
        <div className='h-14'>
          <img src={LOGO} alt="logo" className="w-full h-full"/>
        </div>
        <form>
          <div className='mt-12 flex flex-col  items-center space-y-6'>
            <div className="w-full flex gap-6">
              <Input
                label="First Name"
                required
              />
               <Input
                label="Last Name"
                required
              />
            </div>
            <Input
              type="email"
              label="Email Address"
              required
            />
             <Input
              type="password"
              label="Password"
              required
            />
            </div>
          </form>
            <button
              type="submit"
              className="mt-6 w-full font-medium inline-flex justify-center items-center rounded-md p-3 text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed  disabled:hover:bg-blue-600 disabled:hover:border-bg-600 transition-colors"
            >
              SignUp
            </button>
        </div>
        <p className="sm:mt-8  text-black  text-center">Already have account<Link to="/signInPage" className="text-blue-500 hover:underline hover:underline-offset-1 transition">Signin</Link></p>
      </div>
      </>
  );
};

export default SignUp;

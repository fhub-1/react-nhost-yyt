import React from "react";
import { Helmet } from "react-helmet";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  return (
    <>
      <Helmet> <title>SignUpPage |Home</title></Helmet>
      <div className="flex items-center justify-center py-7 h-screen">
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;

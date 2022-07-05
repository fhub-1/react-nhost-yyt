import React from "react";
import { Helmet } from "react-helmet";
import ForgotPassword from "../components/ForgotPassword";

const ForgotPassowrdpage = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password Page</title>
      </Helmet>
      <div className="flex items-center justify-center py-7 h-screen">
        <ForgotPassword />
      </div>
    </>
  );
};

export default ForgotPassowrdpage;

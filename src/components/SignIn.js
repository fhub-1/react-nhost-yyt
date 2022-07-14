import React, { useState } from "react";
import LOGO from "../assets/logo.png";
import { useSignInEmailPassword } from '@nhost/react'
import { Link, Navigate } from 'react-router-dom'
import Input from './Input'
import Spinner from './Spinner'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signInEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
    useSignInEmailPassword()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    signInEmailPassword(email, password)
  }

  if (isSuccess) {
    return <Navigate to="/" replace={true} />
  }

  const disableForm = isLoading || needsEmailVerification
  return (
    <>
      <div className="w-full max-w-lg">
        <div className="sm:rounded-xl sm:shadow-md sm:border border-opacity-50 sm:bg-white px-4 sm:px-8 py-12 flex flex-col items-center">
          <div className="h-14">
            <img src={LOGO} alt="logo" className="w-full h-full" />
          </div>
           {needsEmailVerification ? (
          <p className="mt-12 text-center">
            Please check your mailbox and follow the verification link to verify your email.
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} className="w-full">
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />

            <button type="submit" disabled={disableForm} className="mt-6 w-full font-medium inline-flex justify-center items-center rounded-md p-3 text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed  disabled:hover:bg-teal-600 disabled:hover:border-bg-600 transition-colors">
              {isLoading ? <Spinner size="sm" /> : 'Sign in'}
            </button>

            {isError ? <p className="mt-4 text-red-500 text-center">{error?.message}</p> : null}
          </form>
        )}
          {/* <form className="w-full">
            <div className="mt-12 w-full  flex  flex-col  items-center space-y-6">
              <Input type="email" label="Email Address" required />
              <Input type="password" label="Password" required />
              <p className="sm">Forgot Password</p>
            </div>
          </form> */}
         
        </div>
        <p className="sm:mt-8  text-black  text-center">
          Already have account
          <Link
            to="/signUpPage"
            className="text-teal-500 hover:underline hover:underline-offset-1 transition mx-2"
          >
            SignUp
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;

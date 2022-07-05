import React from 'react'
import { Helmet } from 'react-helmet'
import SignIn from '../components/SignIn'

const SignInpage = () => {
  return (
          <>
                  <Helmet>
                         <title>Sign In</title>
      </Helmet>
      <div className='flex items-center justify-center py-7 h-screen'>
        <SignIn />
      </div>
                  
                  </>
  )
}

export default SignInpage
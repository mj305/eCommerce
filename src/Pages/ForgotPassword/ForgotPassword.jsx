import React from 'react'
import { Helmet } from "react-helmet";

import ForgotPasswordComponent from '../../Components/ForgotPassword';

const ForgotPassword = () => {

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      
      <ForgotPasswordComponent/>
    </>    
  )
}

export default ForgotPassword
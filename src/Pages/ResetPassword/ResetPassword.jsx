import React from 'react'
import { Helmet } from "react-helmet";

import ResetPasswordComponent from '../../Components/ResetPassword';

const ResetPassword = () => {

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      
      <ResetPasswordComponent/>
    </>    
  )
}

export default ResetPassword
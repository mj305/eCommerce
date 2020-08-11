import React from 'react'
import { Helmet } from "react-helmet";

import LoginComponent from '../../Components/Login'

const Login = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <LoginComponent/>
    </>    
  )
}

export default Login
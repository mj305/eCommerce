import React from 'react';
import { Helmet } from "react-helmet";

import SignupComponent from '../../Components/Signup/SignupComponent'


const Signup = () => {
  
  return (

    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      
      <SignupComponent/>
    </>    
  )
}

export default Signup;
import React from 'react';
import { Helmet } from "react-helmet";

import GooComponent from '../../Components/Goo/GooComponent'


const Goo = () => {
  
  return (

    <>
      <Helmet>
        <title>Goo</title>
      </Helmet>
      
      <GooComponent/>
    </>    
  )
}

export default Goo;
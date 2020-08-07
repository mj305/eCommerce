import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import HomeComponent from '../../Components/Home'


const Home = () => {
  
  return (

    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <HomeComponent/>
    </>    
  )
}

export default Home;
import React from 'react';
import { Helmet } from "react-helmet";
import AboutComponent from '../../Components/About';

const About = () => {
  
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      
      <AboutComponent/>
    </div>
  )
}

export default About;
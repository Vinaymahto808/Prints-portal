import React from 'react';
import Navbar from './Components/Navbar';
import DigitalAadharPortal from './Components/DigitalAadharPortal';
import AadhaarServices from './Components/AadhaarServices';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <DigitalAadharPortal />
      <AadhaarServices />
      <Footer/>
      
    </>
  )
}

export default Home
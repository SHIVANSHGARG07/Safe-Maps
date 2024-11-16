import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Marquee from './Marquee.jsx';
import About from './About.jsx';
import Eyes from './Eyes.jsx';
import Featured from './Featured.jsx';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import Loader from './Loader.jsx';
import { useState, useEffect } from 'react';

function Main() {

  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to display the main content after the loader finishes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200); // Match the loader animation timing

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <div className="w-full  bg-zinc-900 min-h-screen text-white">
            <LandingPage></LandingPage>
            <Marquee></Marquee>
            <About></About>
            <Eyes></Eyes>
            <Featured></Featured>
            <Cards></Cards>
            <Footer></Footer>
          </div>
        </>
      )}
    </div>
  )
}

export default Main

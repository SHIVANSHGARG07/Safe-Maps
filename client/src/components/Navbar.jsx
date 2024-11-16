import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useState } from 'react';
import logo  from "../images/logo.png"
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between item-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-[4vw] w-[4vw] mr-2 sm:h-[3vw] sm:w-[3vw]"src={logo} alt="" />
            <span className="text-2xl tracking-tight font-bold">
  <Link to="/" className="no-underline text-white">
    SafeMaps
  </Link>
</span>          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 mt-3">
        {/* <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li> */}
        <li><Link to="/report" className="text-white hover:text-gray-300">Report</Link></li>
        <li><Link to="/showReports" className="text-white hover:text-gray-300">Crimes</Link></li>
        <li><Link to="/maps" className="text-white hover:text-gray-300">Maps</Link></li>
        <li><Link to="/aboutus" className="text-white hover:text-gray-300">About Us</Link></li>
        <li><Link to="/telephone" className="text-white hover:text-gray-300">Telephone</Link></li>
        <li><Link to="/feedback" className="text-white hover:text-gray-300">Feedback</Link></li>

      </ul>
      <div className="hidden lg:flex justify-center space-x-8 items-center">
      <button
      className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
      onClick={() => navigate("/register")}
    >
      Account
    </button>        
    <button
      className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
      onClick={() => navigate("/pricing")}
    >
      Premium
    </button>
      </div>
      <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">
                <Link to="/report" onClick={toggleNavbar} className="text-white hover:text-gray-300">Report</Link>
              </li>
              <li className="py-4">
                <Link to="/showReports" onClick={toggleNavbar} className="text-white hover:text-gray-300">Crimes</Link>
              </li>
              <li className="py-4">
                <Link to="/maps" onClick={toggleNavbar} className="text-white hover:text-gray-300">Maps</Link>
              </li>
              <li className="py-4">
                <Link to="/aboutus" onClick={toggleNavbar} className="text-white hover:text-gray-300">About</Link>
              </li>
              <li className="py-4">
                <Link to="/telephone" onClick={toggleNavbar} className="text-white hover:text-gray-300">Emergency</Link>
              </li>
              <li className="py-4">
                <Link to="/feedback" onClick={toggleNavbar} className="text-white hover:text-gray-300">Feedback</Link>
              </li>
              
            </ul>
            <div className="flex space-x-6 mt-6">
              <Link to="/register" onClick={toggleNavbar} className="py-2 px-3 border rounded-md text-white hover:text-gray-300">
                Account
              </Link>

              <Link
                to="/pricing"
                onClick={toggleNavbar}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800 text-white hover:opacity-90"
              >
                Premium
              </Link>
            </div>
          </div>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;

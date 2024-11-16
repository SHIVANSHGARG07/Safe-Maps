import React from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import {Routes , Route} from "react-router-dom"
import Main from './components/Main';
import Report from './NavbarComp/Report.jsx';
import Maps from './NavbarComp/Maps.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import axios from 'axios';
import {Toaster} from "react-hot-toast";
import { UserContextProvider } from './context/userContext';
import Forgot from './pages/Forgot.jsx';
import Reset from './pages/Reset.jsx';
import Pricing from './NavbarComp/Pricing.jsx';
import Profile from "./pages/Profile.jsx"
import Sectionfeature from './components/Sectionfeature.jsx';
import Navbar from './components/Navbar.jsx';
import AboutUs from './NavbarComp/AboutUs.jsx';
import HeatMaps from './NavbarComp/HeatMaps.jsx';
import Telephone from './NavbarComp/Telephone.jsx';
import FeedBack from './pages/FeedBack.jsx';
import ShowReports from './pages/ShowReports.jsx';
import Feedback from './pages/FeedBack.jsx';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <UserContextProvider>
      <Toaster position="top-right" toastOptiuons={{duration:2000 }} />
  <div className="w-full h-[100vh] bg-zinc-900  min-h-screen text-white">
    <Navbar />
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/feature" element={<Sectionfeature />} />
        <Route path="/showReports" element={<ShowReports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/heatmap" element={<HeatMaps />} />
        <Route path="/telephone" element={<Telephone />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/showReports" element={<ShowReports />} />
        <Route path="/resetpassword/:token" element={<Reset />} />

      </Routes>

    </div>
    </UserContextProvider>
  )
}

export default App;
